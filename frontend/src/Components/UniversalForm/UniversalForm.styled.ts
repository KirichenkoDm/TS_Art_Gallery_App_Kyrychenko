import styled from "styled-components";

export const StyledUniversalForm = styled.form`
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 10px;
  flex: 0 0 40%;
  max-width: 40%;
  border-radius: 7px;
  box-sizing: border-box;
  box-shadow: gray 0px 0px 3px;
  border: 3px solid #191919;

  label {
    width: 90%;
    margin: 20px 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 600;
    font-size: 18px;
  }

  input, select {
    margin: 0;
    flex: 1 1 auto;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    border: 2px solid #191919;
    border-radius: 4px;
    box-sizing: border-box; 
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 16px;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  div {
    width: 90%;
    display: flex;
    gap: 5px;
    align-items: baseline ;
    justify-content: space-between;
    flex-direction: row;
    label{
      max-width: 30%;
      margin: 20px 0px;
    }
  }

  span, p {
    margin: 0px 3px;
    display: block;
    height: 14px;
    color: red;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 14px;
  }

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

  .button-container {
    justify-content: end;
  }
  
`
