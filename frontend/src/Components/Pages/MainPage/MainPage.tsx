import React, { FC } from "react";
import { StyledMainPage } from "./MainPage.styled";
import { Header } from "../../Header";
import { MainContainer } from "../../MainContainer";
import { Footer } from "../../Footer";
import { ModalWindow } from "../../ModalWindow";

export const MainPage: FC = () => {
  return(
    <StyledMainPage>
      <Header />
      <MainContainer />
      <Footer />
      <ModalWindow />
    </StyledMainPage>
  );
};