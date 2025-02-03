import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/store.hooks";
import { selectAppMode, selectArtworkById, setAppMode } from "../../Store/Artworks/Artworks.slice";
import { EAppMode } from "../../Enums";
import { StyledModalWindow } from "./ModalWindow.styled";
import { UniversalForm } from "../UniversalForm";


export const ModalWindow: FC = () => {
  const dispatch = useAppDispatch();
  const appMode = useAppSelector(selectAppMode);
  const selectedArtwork = useAppSelector(selectArtworkById)

  const handleCloseModal = () => {
    dispatch(setAppMode(EAppMode.viewing));
  }

  const handleModalClick = (e: React.MouseEvent) => {
    const modalContent = e.target as HTMLElement;
    if (!modalContent.closest('#modal-form')) {
      handleCloseModal();
    }
  };

  switch (appMode) {
    case EAppMode.adding:
      return (
      <StyledModalWindow onClick={handleModalClick}>
        <UniversalForm passedValues={null} />
      </StyledModalWindow>
    );
    case EAppMode.updating:
      return selectedArtwork ? (
        <StyledModalWindow onClick={handleModalClick}>
          <UniversalForm passedValues={selectedArtwork}  />
        </StyledModalWindow>
      ) : null;
    case EAppMode.viewing:
      return null;
  }
};