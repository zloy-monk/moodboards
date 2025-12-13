import { ITrack } from '../interfaces/track';
import { ARTISTS } from './artist';

export const METAL_SOUL_TRACKS: ITrack[] = [
  {
    name: 'Burning Sky',
    cover: '/covers/burning-sky.jpg',
    album: 'Ashes of Tomorrow',
    duration: 420,
    path: '/music/metal-soul/burning-sky.mp3',
    artist: ARTISTS[0],
  },
  {
    name: 'Soul Breaker',
    cover: '/covers/soul-breaker.jpg',
    album: 'Fragments',
    duration: 358,
    path: '/music/metal-soul/soul-breaker.mp3',
    artist: ARTISTS[0],
  },
  {
    name: 'Iron Dreams',
    cover: '/covers/iron-dreams.jpg',
    album: 'Steel Hearts',
    duration: 512,
    path: '/music/metal-soul/iron-dreams.mp3',
    artist: ARTISTS[0],
  },
];

export const CHILL_VIBES_TRACKS: ITrack[] = [
  {
    name: 'Late Night Waves',
    cover: '/covers/late-night-waves.jpg',
    album: 'Blue Horizon',
    duration: 344,
    path: '/music/chill-vibes/late-night-waves.mp3',
    artist: ARTISTS[4],
  },
  {
    name: 'Coffee Breeze',
    cover: '/covers/coffee-breeze.jpg',
    album: 'Warm Mornings',
    duration: 259,
    path: '/music/chill-vibes/coffee-breeze.mp3',
    artist: ARTISTS[1],
  },
  {
    name: 'Soft Glow',
    cover: '/covers/soft-glow.jpg',
    album: 'Neon Quiet',
    duration: 315,
    path: '/music/chill-vibes/soft-glow.mp3',
    artist: ARTISTS[4],
  },
  {
    name: 'Floating Light',
    cover: '/covers/floating-light.jpg',
    album: 'Drift',
    duration: 403,
    path: '/music/chill-vibes/floating-light.mp3',
    artist: ARTISTS[1],
  },
];

export const TECHNO_BEATS_TRACKS: ITrack[] = [
  {
    name: 'Night Circuit',
    cover: '/covers/night-circuit.jpg',
    album: 'Electric Pulse',
    duration: 612,
    path: '/music/techno-beats/night-circuit.mp3',
    artist: ARTISTS[2],
  },
  {
    name: 'Synthetic Drive',
    cover: '/covers/synthetic-drive.jpg',
    album: 'Binary Waves',
    duration: 548,
    path: '/music/techno-beats/synthetic-drive.mp3',
    artist: ARTISTS[2],
  },
  {
    name: 'Dark Tunnel',
    cover: '/covers/dark-tunnel.jpg',
    album: 'Underground Motion',
    duration: 705,
    path: '/music/techno-beats/dark-tunnel.mp3',
    artist: ARTISTS[2],
  },
];

export const ROCK_CLASSICS_TRACKS: ITrack[] = [
  {
    name: 'Highway Flame',
    cover: '/covers/highway-flame.jpg',
    album: 'Storm Riders',
    duration: 455,
    path: '/music/rock-classics/highway-flame.mp3',
    artist: ARTISTS[3],
  },
  {
    name: 'Golden Strings',
    cover: '/covers/golden-strings.jpg',
    album: 'Legends Never Fade',
    duration: 349,
    path: '/music/rock-classics/golden-strings.mp3',
    artist: ARTISTS[3],
  },
  {
    name: 'Wild Thunder',
    cover: '/covers/wild-thunder.jpg',
    album: 'Axe of Time',
    duration: 533,
    path: '/music/rock-classics/wild-thunder.mp3',
    artist: ARTISTS[3],
  },
  {
    name: 'Broken Star',
    cover: '/covers/broken-star.jpg',
    album: 'Retro Light',
    duration: 412,
    path: '/music/rock-classics/broken-star.mp3',
    artist: ARTISTS[3],
  },
];
