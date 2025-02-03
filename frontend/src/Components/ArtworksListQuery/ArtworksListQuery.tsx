import React, { ChangeEvent, FC } from "react";
import { StyledArtworksListQuery } from "./ArtworksListQuery.styled";
import { useAppDispatch, useAppSelector } from "../../Store/store.hooks";
import { selectArtworksQuery, setArtworksQuery } from "../../Store/Artworks/Artworks.slice";
import { EArtworkType } from "../../Enums";


export const ArtworksListQuery: FC = () => {
  const dispatch = useAppDispatch();
  const artworksQuery = useAppSelector(selectArtworksQuery);

  const handleFilterArtist = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = { ...artworksQuery, artist: e.target.value };
    dispatch(setArtworksQuery(newQuery));
  };
  const handleFilterType = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all artworks" ? undefined : e.target.value;
    const newQuery = { ...artworksQuery, type: value };
    dispatch(setArtworksQuery(newQuery));
  };
  const handleInvertSorting = (e: ChangeEvent<HTMLSelectElement>) => {
    const newQuery = { ...artworksQuery, priceSortOrder: e.target.value as "asc" | "desc" };
    dispatch(setArtworksQuery(newQuery));
  };

  return (
    <StyledArtworksListQuery>
      <label>
        Search By Artist Name:
        <input
          id="artist"
          name="artist"
          type="text"
          onChange={handleFilterArtist}
          placeholder="Artist name"
        />
      </label>
      <label>
        Artwork Type
        <select
          id="type"
          name="type"
          onChange={handleFilterType}
        >
          <option key="desc">all artworks</option>
          {Object.keys(EArtworkType).map(artworkType =>
            <option key={artworkType} value={artworkType}>
              {artworkType}
            </option>)}
        </select>
      </label>
      <label>
        Price sorting
        <select
          id="price"
          name="price"
          onChange={handleInvertSorting}
        >
          <option key="desc" value={"desc"}>highest to lowest</option>
          <option key="asc" value={"asc"}>lowest to highest</option>
        </select>
      </label>
    </StyledArtworksListQuery>
  );
}