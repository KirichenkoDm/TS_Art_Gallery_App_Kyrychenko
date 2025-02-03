import React, { FC } from "react";
import { StyledFooter } from "./Footer.styled";
import facebook from "../../Images/facebook.png"
import twitter from "../../Images/twitter.png"
import instagram from "../../Images/instagram.png"
export const Footer: FC = () => {
  return(
    <StyledFooter>
      <div className="footer-text">
        <h1>ArtGalleryManager</h1>
        <p>Your go-to platform for managing and exploring exquisite art pieces</p>
      </div>
      <div>
        <a href=""><img src={facebook} alt="facebook" /></a>
        <a href=""><img src={twitter} alt="twitter" /></a>
        <a href=""><img src={instagram} alt="instagram" /></a>
      </div>
    </StyledFooter>
  );
};