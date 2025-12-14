import { Routes } from '@angular/router';
import { Playlist } from './features/playlists/pages/playlist/playlist';

export const routes: Routes = [
  { path: 'playlist/:slug', component: Playlist },
  { path: '', redirectTo: 'playlist/korean-okak', pathMatch: 'full' },
];
