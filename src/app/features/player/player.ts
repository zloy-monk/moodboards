import {
  Component,
  input,
  signal,
  output,
  effect,
  OnDestroy,
} from '@angular/core';
import { ITrack } from '../playlists/interfaces/track';
import { IPlaylist } from '../playlists/interfaces/playlist';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.html',
  styleUrl: './player.scss',
})
export class Player implements OnDestroy {
  currentPlaylist = input<IPlaylist | undefined>(undefined);
  currentTrack = input<ITrack | null>(null);
  currentQueue = input<ITrack[] | null>(null);
  isPlaying = signal<boolean>(false);
  currentTime = signal<number>(0);
  playbackMode = signal<'repeat-one' | 'repeat-all' | 'shuffle'>('repeat-all');
  isPlayingChange = output<boolean>();
  trackChange = output<ITrack>();
  private audio = new Audio();
  private timeUpdateInterval?: number;
  private currentTrackPath: string = '';

  Math = Math;

  constructor() {
    // Настройка обработчиков событий аудио
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime.set(this.audio.currentTime);
    });

    this.audio.addEventListener('ended', () => {
      const mode = this.playbackMode();
      const playlist = this.currentPlaylist();
      const current = this.currentTrack();

      // Если нет текущего трека или плейлиста — просто останавливаемся
      if (!current || !playlist || !playlist.trackList?.length) {
        this.isPlaying.set(false);
        this.currentTime.set(0);
        this.isPlayingChange.emit(false);
        return;
      }

      // repeat-one: перезапускаем текущий трек
      if (mode === 'repeat-one') {
        this.audio.currentTime = 0;
        this.currentTime.set(0);
        this.audio.play().catch(() => {
          this.isPlaying.set(false);
          this.isPlayingChange.emit(false);
        });
        return;
      }

      const tracks = playlist.trackList;
      const currentIndex = tracks.findIndex((t) => t.name === current.name);

      let nextIndex = 0;

      if (mode === 'repeat-all') {
        // Зациклить плейлист по порядку
        nextIndex =
          currentIndex === -1 ? 0 : (currentIndex + 1) % tracks.length;
      } else {
        // shuffle: зациклить плейлист в рандомном порядке
        if (tracks.length === 1) {
          nextIndex = currentIndex === -1 ? 0 : currentIndex;
        } else {
          do {
            nextIndex = Math.floor(Math.random() * tracks.length);
          } while (nextIndex === currentIndex && tracks.length > 1);
        }
      }

      const nextTrack = tracks[nextIndex];

      if (!nextTrack) {
        this.isPlaying.set(false);
        this.currentTime.set(0);
        this.isPlayingChange.emit(false);
        return;
      }

      // Делегируем переключение трека родителю через trackChange.
      // isPlaying остаётся true, effect сработает и запустит новый трек.
      this.currentTime.set(0);
      this.trackChange.emit(nextTrack);
    });

    // Сброс времени при смене трека и автоматический запуск
    effect(() => {
      const track = this.currentTrack();
      if (track) {
        const wasPlaying = this.isPlaying();
        const newPath = track.path;

        // Проверяем, нужно ли обновить источник
        if (this.currentTrackPath !== newPath) {
          this.audio.pause();
          this.audio.src = newPath;
          this.currentTrackPath = newPath;
          this.currentTime.set(0);

          // Если было воспроизведение, запускаем новый трек
          if (wasPlaying) {
            this.audio.play().catch(() => {
              this.isPlaying.set(false);
              this.isPlayingChange.emit(false);
            });
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.src = '';
    if (this.timeUpdateInterval) {
      clearInterval(this.timeUpdateInterval);
    }
  }

  cyclePlaybackMode(): void {
    const mode = this.playbackMode();
    if (mode === 'repeat-all') {
      this.playbackMode.set('repeat-one');
    } else if (mode === 'repeat-one') {
      this.playbackMode.set('shuffle');
    } else {
      this.playbackMode.set('repeat-all');
    }
  }

  get formattedTime(): string {
    const time = this.currentTime();
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

  togglePlay(): void {
    const track = this.currentTrack();

    if (!track) return;

    if (this.currentTrackPath !== track.path) {
      this.audio.src = track.path;
      this.currentTrackPath = track.path;
      this.currentTime.set(0);
    }

    if (this.isPlaying()) {
      this.audio.pause();
      this.isPlaying.set(false);
    } else {
      this.audio.play();
      this.isPlaying.set(true);
    }

    this.isPlayingChange.emit(this.isPlaying());
  }

  previous(): void {
    if (this.audio.currentTime >= 10) {
      this.audio.currentTime -= 10;
    } else {
      this.audio.currentTime = 0;
    }
  }

  next(): void {
    if (this.currentTrack()!.duration - this.audio.currentTime >= 10) {
      this.audio.currentTime += 10;
    } else {
      this.audio.currentTime = this.currentTrack()!.duration;
    }
  }

  rewind(): void {
    const queue = this.currentQueue();
    const currentTrack = this.currentTrack();

    if (!queue || !currentTrack || queue.length < 3) return;

    // Текущий трек находится под индексом 1
    // Предыдущий трек - индекс 0
    const previousTrack = queue[0];

    if (this.audio.currentTime >= 10) {
      this.audio.currentTime = 0;
      return;
    }

    if (this.audio.currentTime < 10) {
      if (previousTrack) {
        const wasPlaying = this.isPlaying();
        this.audio.pause();
        this.currentTime.set(0);
        this.trackChange.emit(previousTrack);

        // Сохраняем состояние воспроизведения для effect
        if (wasPlaying) {
          this.isPlaying.set(true);
        }
      }
      return;
    }
  }

  forward(): void {
    const queue = this.currentQueue();
    const currentTrack = this.currentTrack();

    if (!queue || !currentTrack || queue.length < 3) return;

    // Текущий трек находится под индексом 1
    // Следующий трек - индекс 2
    const nextTrack = queue[2];

    if (nextTrack) {
      const wasPlaying = this.isPlaying();
      this.audio.pause();
      this.currentTime.set(0);
      this.trackChange.emit(nextTrack);

      // Сохраняем состояние воспроизведения для effect
      if (wasPlaying) {
        this.isPlaying.set(true);
      }
    }
  }
}
