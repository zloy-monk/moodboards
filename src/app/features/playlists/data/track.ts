import { ITrack } from '../interfaces/track';
import { ARTISTS } from './artist';

const cover: string = '/album-cover/';
const track: string = '/mp3/';

export const OKAK_KOREAN_TRACKS: ITrack[] = [
  {
    name: 'Lie',
    cover: `${cover}lie_bts.jpeg`,
    album: 'You Never Walk Alone',
    duration: 215,
    path: `${track}lie_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Run',
    cover: `${cover}run_bts.jpg`,
    album: 'The Most Beautiful Moment in Life: Young Forever',
    duration: 236,
    path: `${track}run_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Save Me',
    cover: `${cover}save_me_bts.jpg`,
    album: 'The Most Beautiful Moment in Life: Young Forever',
    duration: 196,
    path: `${track}save_me_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Boy In Luv',
    cover: `${cover}boy_in_luv_bts.jpg`,
    album: 'Skool Luv Affair',
    duration: 230,
    path: `${track}boy_in_luv_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Airplane pt.2',
    cover: `${cover}airplane_pt_2_bts.jpg`,
    album: "Love Yourself 轉 'Tear'",
    duration: 218,
    path: `${track}airplane_pt_2_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Go Go',
    cover: `${cover}go_go_bts.jpg`,
    album: "Love Yourself 承 'Her'",
    duration: 235,
    path: `${track}go_go_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Not Today',
    cover: `${cover}not_today_bts.webp`,
    album: 'You Never Walk Alone',
    duration: 231,
    path: `${track}not_today_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Trivia 轉 : Seesaw',
    cover: `${cover}trivia_seesaw_bts.jpg`,
    album: "Love Yourself 結 'Answer'",
    duration: 246,
    path: `${track}trivia_seesaw_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Dope',
    cover: `${cover}dope_bts.jpg`,
    album: 'The Most Beautiful Moment in Life: Young Forever',
    duration: 240,
    path: `${track}dope_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'FAKE LOVE',
    cover: `${cover}fake_love_bts.jpg`,
    album: "Love Yourself 轉 'Tear'",
    duration: 242,
    path: `${track}fake_love_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Best Of Me',
    cover: `${cover}best_of_me_bts.jpg`,
    album: "Love Yourself 結 'Answer'",
    duration: 227,
    path: `${track}best_of_me_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'I Need U',
    cover: `${cover}i_need_u_bts.jpg`,
    album: 'The Most Beautiful Moment in Life: Young Forever',
    duration: 210,
    path: `${track}i_need_u_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Intro: Boy Meets Evil',
    cover: `${cover}intro_boy_meets_evil_bts.webp`,
    album: 'Wings',
    duration: 121,
    path: `${track}intro_boy_meets_evil_bts.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Blood Sweat & Tears',
    cover: `${cover}blood_sweat_tears_bts.webp`,
    album: 'Wings',
    duration: 217,
    path: `${track}blood_sweat_tears_bts.mp3`,
    artist: ARTISTS[0],
  },
];

export const METAL_SOUL_TRACKS: ITrack[] = [
  {
    name: 'Burning Sky',
    cover: `${cover}burning-sky.jpg`,
    album: 'Ashes of Tomorrow',
    duration: 420,
    path: `${track}metal-soul/burning-sky.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Soul Breaker',
    cover: `${cover}soul-breaker.jpg`,
    album: 'Fragments',
    duration: 358,
    path: `${track}metal-soul/soul-breaker.mp3`,
    artist: ARTISTS[0],
  },
  {
    name: 'Iron Dreams',
    cover: `${cover}iron-dreams.jpg`,
    album: 'Steel Hearts',
    duration: 512,
    path: `${track}metal-soul/iron-dreams.mp3`,
    artist: ARTISTS[0],
  },
];

export const CHILL_VIBES_TRACKS: ITrack[] = [
  {
    name: 'Late Night Waves',
    cover: `${cover}late-night-waves.jpg`,
    album: 'Blue Horizon',
    duration: 344,
    path: `${track}chill-vibes/late-night-waves.mp3`,
    artist: ARTISTS[4],
  },
  {
    name: 'Coffee Breeze',
    cover: `${cover}coffee-breeze.jpg`,
    album: 'Warm Mornings',
    duration: 259,
    path: `${track}chill-vibes/coffee-breeze.mp3`,
    artist: ARTISTS[1],
  },
  {
    name: 'Soft Glow',
    cover: `${cover}soft-glow.jpg`,
    album: 'Neon Quiet',
    duration: 315,
    path: `${track}chill-vibes/soft-glow.mp3`,
    artist: ARTISTS[4],
  },
  {
    name: 'Floating Light',
    cover: `${cover}floating-light.jpg`,
    album: 'Drift',
    duration: 403,
    path: `${track}chill-vibes/floating-light.mp3`,
    artist: ARTISTS[1],
  },
];

export const TECHNO_BEATS_TRACKS: ITrack[] = [
  {
    name: 'Night Circuit',
    cover: `${cover}night-circuit.jpg`,
    album: 'Electric Pulse',
    duration: 612,
    path: `${track}techno-beats/night-circuit.mp3`,
    artist: ARTISTS[2],
  },
  {
    name: 'Synthetic Drive',
    cover: `${cover}synthetic-drive.jpg`,
    album: 'Binary Waves',
    duration: 548,
    path: `${track}techno-beats/synthetic-drive.mp3`,
    artist: ARTISTS[2],
  },
  {
    name: 'Dark Tunnel',
    cover: `${cover}dark-tunnel.jpg`,
    album: 'Underground Motion',
    duration: 705,
    path: `${track}techno-beats/dark-tunnel.mp3`,
    artist: ARTISTS[2],
  },
];

export const ROCK_CLASSICS_TRACKS: ITrack[] = [
  {
    name: 'Highway Flame',
    cover: `${cover}highway-flame.jpg`,
    album: 'Storm Riders',
    duration: 455,
    path: `${track}rock-classics/highway-flame.mp3`,
    artist: ARTISTS[3],
  },
  {
    name: 'Golden Strings',
    cover: `${cover}golden-strings.jpg`,
    album: 'Legends Never Fade',
    duration: 349,
    path: `${track}rock-classics/golden-strings.mp3`,
    artist: ARTISTS[3],
  },
  {
    name: 'Wild Thunder',
    cover: `${cover}wild-thunder.jpg`,
    album: 'Axe of Time',
    duration: 533,
    path: `${track}rock-classics/wild-thunder.mp3`,
    artist: ARTISTS[3],
  },
  {
    name: 'Broken Star',
    cover: `${cover}broken-star.jpg`,
    album: 'Retro Light',
    duration: 412,
    path: `${track}rock-classics/broken-star.mp3`,
    artist: ARTISTS[3],
  },
];
