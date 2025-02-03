import React, { FC } from "react";
import { StyledControlButtons } from "./ControlButtons.styled";
import { useAppDispatch, useAppSelector } from "../../Store/store.hooks";
import { selectSelectedApartmentId, setAppMode } from "../../Store/Artworks/Artworks.slice";
import { EAppMode } from "../../Enums";
import { deleteArtworkByIdThunk, getAllArtworksThunk } from "../../Store/Artworks/Artworks.api";

export const ControlButtons: FC= () => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector(selectSelectedApartmentId);
  
  const handleAddNewArtwork = () => {
    dispatch(setAppMode(EAppMode.adding));
  };

  const handleRemoveArtwork = async () => {
    if(selectedId) {
      await dispatch(deleteArtworkByIdThunk(selectedId));
      await dispatch(getAllArtworksThunk());
    }
  };

  const handleUpdateArtwork = () => {
    if(selectedId) {
      dispatch(setAppMode(EAppMode.updating));
    }
  };

  return (
    <StyledControlButtons>
      <button onClick={handleAddNewArtwork}>Add New Artwork</button>
      <button onClick={handleRemoveArtwork} disabled={selectedId === null}>Remove Artwork</button>
      <button onClick={handleUpdateArtwork} disabled={selectedId === null}>Edit Artwork</button>
    </StyledControlButtons>
  );
}