import { ArtworkType } from "src/Enums/artworkType.enum";

export interface QueryInterface { 
  price?: string; 
  artist?: string;
  type?: ArtworkType;
}