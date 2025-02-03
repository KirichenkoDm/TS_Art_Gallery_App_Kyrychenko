import styled from "styled-components";

export const StyledControlButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
  button {
    background-color: #191919;
    border-radius: 10px;
    width: 150px;
    height: 35px;
    display: inline-block;
    vertical-align: middle;

    color: white;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 300;
    font-size: 14px;

    border: none;
    cursor: pointer;

    transition:  transform 0.2s ease;
    will-change: transform;
  }
  
  button:hover {
    transform: scale(1.05);
  }
  
  button:focus { 
    transform: scale(1.05);
    outline: 2px solid #555; 
    outline-offset: 2px; 
  } 
  button:active {
    transform: scale(0.95);
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:focus,
  button:disabled:active {
    cursor: default;
    background-color: #393939;
    outline: none;
    transform: none;
  }
`