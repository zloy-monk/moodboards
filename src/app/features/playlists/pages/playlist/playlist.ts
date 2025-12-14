import {
  Component,
  inject,
  signal,
  computed,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Player } from '../../../player/player';
import { ActivatedRoute } from '@angular/router';
import { PLAYLISTS } from '../../data/playlist';
import { IPlaylist } from '../../interfaces/playlist';
import { ITrack } from '../../interfaces/track';

@Component({
  selector: 'app-playlist',
  imports: [Player],
  templateUrl: './playlist.html',
  styleUrl: './playlist.scss',
})
export class Playlist implements OnInit {
  @ViewChild('trackListContainer', { static: false })
  trackListContainer!: ElementRef<HTMLDivElement>;

  playlistSlug = signal<string>('');
  selectedTrack = signal<ITrack | null>(null);
  playlistQueue = signal<ITrack[] | null>(null);
  activeTab = signal<'tracks' | 'description'>('tracks');
  isPlaying = signal<boolean>(false);

  private route = inject(ActivatedRoute);
  protected readonly playlist = computed<IPlaylist | undefined>(() => {
    return PLAYLISTS.find((playlist) => playlist.slug === this.playlistSlug());
  });

  Math = Math;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playlistSlug.set(params['slug']);
    });
  }

  selectTrack(tracks: ITrack[], index: number): void {
    const length = tracks.length;

    const prevIndex = (index - 1 + length) % length;
    const nextIndex = (index + 1) % length;

    const queue: ITrack[] = [
      tracks[prevIndex],
      tracks[index],
      tracks[nextIndex],
    ];

    this.playlistQueue.set(queue);
    this.selectedTrack.set(tracks[index]);
    this.scrollToSelectedTrack();
  }

  scrollToSelectedTrack(): void {
    // Используем setTimeout для отложенного скролла после обновления DOM
    setTimeout(() => {
      if (this.activeTab() !== 'tracks') return;

      const playlist = this.playlist();
      if (!playlist) return;

      const selectedTrack = this.selectedTrack();
      if (!selectedTrack) return;

      const trackIndex = playlist.trackList.findIndex(
        (t) => t.name === selectedTrack.name
      );

      if (trackIndex === -1) return;

      const trackElement = document.getElementById(`track-${trackIndex}`);
      if (trackElement) {
        trackElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }, 100);
  }

  setActiveTab(tab: 'tracks' | 'description'): void {
    this.activeTab.set(tab);
  }

  onPlayingChange(isPlaying: boolean): void {
    this.isPlaying.set(isPlaying);
  }

  isTrackPlaying(track: ITrack): boolean {
    return this.selectedTrack()?.name === track.name && this.isPlaying();
  }

  onTrackChange(track: ITrack): void {
    const playlist = this.playlist();
    if (!playlist) return;

    const trackIndex = playlist.trackList.findIndex(
      (t) => t.name === track.name
    );
    if (trackIndex === -1) return;

    const wasPlaying = this.isPlaying();

    // Убеждаемся, что вкладка TRACKS активна для скролла
    this.activeTab.set('tracks');

    this.selectTrack(playlist.trackList, trackIndex);

    // Сохраняем состояние воспроизведения
    if (wasPlaying) {
      this.isPlaying.set(true);
    }
  }
}
