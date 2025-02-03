import styled from "styled-components";

export const StyledArtworksListQuery = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 15px;

  label {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 600;
    font-size: 18px;
  }

  input, select {
    width: 85%;
    margin: 0;
    flex: 0 0 auto;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    border: 1px solid #A9A9A9;
    border-radius: 7px;
    box-sizing: border-box; 
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 16px;
  }
`