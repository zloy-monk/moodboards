import { ITrack } from './track';

export interface IPlaylist {
  slug: string;
  name: string;
  trackList: ITrack[];
  cover?: string;
}
