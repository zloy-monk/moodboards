import { Component, input, signal } from '@angular/core';
import { ITrack } from '../playlists/interfaces/track';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.html',
  styleUrl: './player.scss',
})
export class Player {
  currentTrack = input<ITrack | null>(null);
  isPlaying = signal<boolean>(false);
  currentTime = signal<number>(0);

  get formattedTime(): string {
    const time = this.currentTime();
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${Math.floor((time % 1) * 100)
      .toString()
      .padStart(2, '0')}`;
  }

  togglePlay(): void {
    this.isPlaying.set(!this.isPlaying());
  }

  previous(): void {}

  next(): void {}

  rewind(): void {}

  forward(): void {}
}
