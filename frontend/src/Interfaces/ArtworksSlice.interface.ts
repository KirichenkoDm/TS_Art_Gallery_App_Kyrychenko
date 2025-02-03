import { IArtwork, IArtworksQuery } from ".";
import { EAppMode, EFetchStatus } from "../Enums";

export interface IArtworksSlice {
  artworksList: IArtwork[];
  artworksQuery: IArtworksQuery;
  selectedApartmentId: number | null;
  fetchStatus: EFetchStatus;
  appMode: EAppMode;
}