import { IPlaylist } from '../interfaces/playlist';
import {
  METAL_SOUL_TRACKS,
  OKAK_KOREAN_TRACKS,
  ROCK_CLASSICS_TRACKS,
} from './track';

export const PLAYLISTS: IPlaylist[] = [
  {
    name: '엌악',
    slug: 'korean-okak',
    trackList: OKAK_KOREAN_TRACKS,
    cover: '/cover/cover_1.jpg',
  },
  {
    name: 'Metal Soul',
    slug: 'metal-soul',
    trackList: METAL_SOUL_TRACKS,
  },
  {
    name: 'Rock Classics',
    slug: 'rock-classics',
    trackList: ROCK_CLASSICS_TRACKS,
  },
];
