import React, { FC, useEffect, useRef, WheelEvent } from "react";
import { StyledArtworksList } from "./ArtworksList.styled";
import { useAppDispatch, useAppSelector } from "../../Store/store.hooks";
import { selectAllArtworks, selectArtworksQuery, selectSelectedApartmentId, setSelectedApartmentId } from "../../Store/Artworks/Artworks.slice";
import { getAllArtworksThunk } from "../../Store/Artworks/Artworks.api";
import { IArtwork } from "../../Interfaces";
import { ArtworksListItem } from "../ArtwotksListItem";

export const ArtworksList: FC = () => {
  const dispatch = useAppDispatch();
  const selectedApartmentId = useAppSelector(selectSelectedApartmentId);
  const artworksQuery = useAppSelector(selectArtworksQuery);
  const artworks = useAppSelector(selectAllArtworks);

  useEffect(() => {
    dispatch(setSelectedApartmentId(null));
    dispatch(getAllArtworksThunk());
  }, [dispatch, artworksQuery]);

  return (
    <StyledArtworksList>
      {
        !artworks.length ?
          <h2>No Artworks Match Querry😞</h2>
          :
          artworks.map(
            (artwork: IArtwork) =>
              <ArtworksListItem
                selected={artwork.id === selectedApartmentId}
                key={artwork.id}
                artworkData={artwork}
              />
          )
      }
    </StyledArtworksList>
  )
}