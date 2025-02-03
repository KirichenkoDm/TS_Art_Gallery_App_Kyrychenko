import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";
import { BASE_URL } from "../../Unils"
import { GenerateUrl } from "../../Unils";
import { IArtwork } from "../../Interfaces";

export const getAllArtworksThunk = createAsyncThunk(
  "artworks/getAll",
  async (args, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const url = GenerateUrl(state.artworks.artworksQuery)
      const responce = await axios.get(url);
      return responce.data.artworks as IArtwork[];
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
        return rejectWithValue(err.response.data.message);
      }
    }
    return rejectWithValue("Apartment Api Error");
  }
);

export const addNewArtworkThunk = createAsyncThunk(
  "artworks/addNew",
  async (newData: IArtwork) => {
    try {
      const responce = await axios.post(BASE_URL, newData);
      console.log(responce.data.message);
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
      }
    }
  }
);

export const deleteArtworkByIdThunk = createAsyncThunk(
  "artworks/deleteById",
  async (id: number) => {
    try {
      let url = BASE_URL + "/" + id;
      const responce = await axios.delete(url);
      console.log(responce.data.message);
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
      }
    }
  }
);

export const updateArtworkByIdThunk = createAsyncThunk(
  "artworks/updateById",
  async (newData: IArtwork) => {
    try {
      let url = BASE_URL + "/" + newData.id;
      const responce = await axios.put(url, newData);
      console.log(responce.data.message);
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
      }
    }
  }
);
