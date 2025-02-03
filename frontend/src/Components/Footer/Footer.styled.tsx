import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #191919;
  color: white;

  h1, p {
    margin: 0;
  }

  h1 {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 800;
    font-size: 22px;
  }

  p {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 200;
    font-size: 14px;
  }

  div {
    display: inline-block;
    vertical-align: middle;
  }

  #footer-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 30px;
    height: 30px;
    margin: 10px;
    border-radius: 0px;
    border: 5px solid black;
    border-radius: 5px;
    overflow: hidden;
    text-decoration: none;
  }

  img {
    width: 112%;
    height: 112%;
    object-fit: contain;
  }
`