import { EArtworkType } from "../Enums";

export interface IArtwork {
  id: number;
  title: string;
  artist: string;
  type: EArtworkType;
  price: number;
  availability: boolean;
}