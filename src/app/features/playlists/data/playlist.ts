import { IPlaylist } from '../interfaces/playlist';
import { OKAK_KOREAN_TRACKS, OKAK_TRACKS, SEREBRO_TRACKS } from './track';

export const PLAYLISTS: IPlaylist[] = [
  {
    name: '엌악',
    slug: 'korean-okak',
    trackList: OKAK_KOREAN_TRACKS,
    cover: 'cover/cover_1.jpg',
  },
  {
    name: 'окак',
    slug: 'okak',
    trackList: OKAK_TRACKS,
    cover: 'cover/cover_2.jpg',
  },
  {
    name: 'Serebro',
    slug: 'serebro',
    trackList: SEREBRO_TRACKS,
    cover: 'album-cover/sladko.jpg',
  },
];
