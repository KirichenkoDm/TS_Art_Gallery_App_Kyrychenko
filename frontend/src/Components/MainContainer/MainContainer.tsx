import React, { FC } from "react";
import { StyledMainContainer } from "./MainContainer.styled";
import { ArtworksList } from "../ArtworksList";
import { ControlButtons } from "../ControlButtons";
import { ArtworksListQuery } from "../ArtworksListQuery";

export const MainContainer: FC = () => {
  return(
    <StyledMainContainer>
      <h1>Explore Our Collection</h1>
      <ArtworksListQuery />
      <ArtworksList />
      <ControlButtons />
    </StyledMainContainer>
  );
};