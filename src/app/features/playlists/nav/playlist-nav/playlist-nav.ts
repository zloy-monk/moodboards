import { Component } from '@angular/core';
import { IPlaylist } from '../../interfaces/playlist';
import { PLAYLISTS } from '../../data/playlist';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-playlist-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './playlist-nav.html',
  styleUrl: './playlist-nav.scss',
})
export class PlaylistNav {
  playlists: IPlaylist[] = PLAYLISTS;
}
