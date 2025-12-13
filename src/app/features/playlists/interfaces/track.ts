import { IArtist } from './artist';

export interface ITrack {
  name: string;
  cover: string;
  album: string;
  duration: number;
  path: string;
  artist: IArtist;
}
