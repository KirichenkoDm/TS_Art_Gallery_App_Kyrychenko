import styled from "styled-components";

export const StyledArtworksListItem = styled.li<{ $selected?: boolean; }>`
  background-color: #FFFFFF;
  height: 95%;
  flex: 0 0 32%;
  max-width: 32%;
  margin: 5px;
  padding: 10px;  
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: gray 0px 0px 3px;
  outline: ${props => props.$selected ? "3px solid green" : "none"};

  cursor: pointer;
  overflow: hidden;

  img {
    border-radius: 5px;
    width: 100%;
    height: 65%;
    object-fit: cover;
  }

  div {
    height: 35%;
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;

    position: relative;  /* Необходимо для правильного отображения тени */
  }

  div::-webkit-scrollbar {
    width: 5px;
  }
  div::-webkit-scrollbar-thumb {
    background-color: #8F8F8F; 
    border-radius: 5px; 
  }
  div::-webkit-scrollbar-thumb:hover {
    background-color: #191919; 
  }


  h2 {
    display: flex;
    justify-content: space-between;
    margin: 0;

    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    display: flex;
    justify-content: space-between;
    margin: 0;

    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 200;
    font-size: 16px;
  }

  .unavailable {
    color: red;
  }
`