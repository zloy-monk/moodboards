import { Component, inject, signal, computed } from '@angular/core';
import { Player } from '../../../player/player';
import { ActivatedRoute } from '@angular/router';
import { PLAYLISTS } from '../../data/playlist';
import { IPlaylist } from '../../interfaces/playlist';

@Component({
  selector: 'app-playlist',
  imports: [Player],
  templateUrl: './playlist.html',
  styleUrl: './playlist.scss',
})
export class Playlist {
  playlistSlug = signal<string>('');

  private route = inject(ActivatedRoute);
  protected readonly playlist = computed<IPlaylist | undefined>(() => {
    return PLAYLISTS.find((playlist) => playlist.slug === this.playlistSlug());
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playlistSlug.set(params['slug']);
    });
  }
}
