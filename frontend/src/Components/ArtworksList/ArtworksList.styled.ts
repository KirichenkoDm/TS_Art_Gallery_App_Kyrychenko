import styled from "styled-components";

export const StyledArtworksList = styled.ul`
  height: 325px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 0;
  margin: 0;
  list-style: none;
  align-items: flex-start;

  &::-webkit-scrollbar {
    height: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #8F8F8F; 
    border-radius: 5px; 
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #191919; 
  }

  li {
    transition:  transform 0.2s ease;
    will-change: transform;
  }
  
  li:hover {
    transform: scale(0.97);
  }
  
  li:active {
    transform: scale(1.01);
  }

`