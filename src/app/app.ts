import { Component } from '@angular/core';
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
}
