import { IPlaylist } from '../interfaces/playlist';
import {
  CHILL_VIBES_TRACKS,
  METAL_SOUL_TRACKS,
  ROCK_CLASSICS_TRACKS,
  TECHNO_BEATS_TRACKS,
} from './track';

export const PLAYLISTS: IPlaylist[] = [
  {
    name: 'Metal Soul',
    slug: 'metal-soul',
    trackList: METAL_SOUL_TRACKS,
  },
  {
    name: 'Chill Vibes',
    slug: 'chill-vibes',
    trackList: CHILL_VIBES_TRACKS,
  },
  {
    name: 'Techno Beats',
    slug: 'techno-beats',
    trackList: TECHNO_BEATS_TRACKS,
  },
  {
    name: 'Rock Classics',
    slug: 'rock-classics',
    trackList: ROCK_CLASSICS_TRACKS,
  },
];
