import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaylistNav } from './features/playlists/nav/playlist-nav/playlist-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlaylistNav],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Moodboards';
  isGiftModalOpen = signal<boolean>(false);
  isGiftCardFlipped = signal<boolean>(false);

  onGiftModalOpen(): void {
    this.isGiftModalOpen.set(true);
    this.isGiftCardFlipped.set(false);
  }

  onGiftModalClose(): void {
    this.isGiftModalOpen.set(false);
    this.isGiftCardFlipped.set(false);
  }

  flipGiftCard(): void {
    this.isGiftCardFlipped.set(!this.isGiftCardFlipped());
  }
}
