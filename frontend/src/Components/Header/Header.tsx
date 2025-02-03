import React, { FC } from "react";
import palette from "../../Images/Palette.png";
import { StyledHeader } from "./Header.styled";
export const Header: FC = () => {
  return(
    <StyledHeader>
      <img src={palette} alt = "Palette logo"/>
      <h1>ArtGalleryManager</h1>
    </StyledHeader>
  );
};