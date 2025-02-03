import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArtworksQuery } from "../../Interfaces";
import { EAppMode, EFetchStatus } from "../../Enums";
import { IArtworksSlice } from "../../Interfaces";
import { RootState } from "../store";
import { 
  addNewArtworkThunk, 
  deleteArtworkByIdThunk, 
  getAllArtworksThunk, 
  updateArtworkByIdThunk 
} from "./Artworks.api";

const initialState: IArtworksSlice = {
  artworksList: [],
  artworksQuery: {priceSortOrder: "desc"},
  selectedApartmentId: null,
  fetchStatus: EFetchStatus.ready,
  appMode: EAppMode.viewing,
};


const artworksSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    setArtworksQuery: (state, action: PayloadAction<IArtworksQuery>) => {
      state.artworksQuery = action.payload;
    },
    setSelectedApartmentId: (state, action: PayloadAction<number | null>) => {
      state.selectedApartmentId = action.payload;
    },
    setAppMode: (state, action: PayloadAction<EAppMode>) => {
      state.appMode = action.payload;
    },
  },
  extraReducers: function (builder) {
    builder
      //getAll
      .addCase(getAllArtworksThunk.pending, state => { state.fetchStatus = EFetchStatus.loading; })
      .addCase(getAllArtworksThunk.fulfilled, (state, action) => {
        state.fetchStatus = EFetchStatus.ready;
        state.artworksList = [...action.payload];
      })
      .addCase(getAllArtworksThunk.rejected, (state) => {
        state.fetchStatus = EFetchStatus.failed;
        state.artworksList = [];
      })
      //addNew
      .addCase(addNewArtworkThunk.pending, state => { state.fetchStatus = EFetchStatus.loading; })
      .addCase(addNewArtworkThunk.fulfilled, state => { state.fetchStatus = EFetchStatus.ready; })
      .addCase(addNewArtworkThunk.rejected, state => { state.fetchStatus = EFetchStatus.failed; })
      //deleteById
      .addCase(deleteArtworkByIdThunk.pending, state => { state.fetchStatus = EFetchStatus.loading; })
      .addCase(deleteArtworkByIdThunk.fulfilled, state => { state.fetchStatus = EFetchStatus.ready; })
      .addCase(deleteArtworkByIdThunk.rejected, state => { state.fetchStatus = EFetchStatus.failed; })
      //updateById
      .addCase(updateArtworkByIdThunk.pending, state => { state.fetchStatus = EFetchStatus.loading; })
      .addCase(updateArtworkByIdThunk.fulfilled, state => { state.fetchStatus = EFetchStatus.ready; })
      .addCase(updateArtworkByIdThunk.rejected, state => { state.fetchStatus = EFetchStatus.failed; })
  }
});

//actions
export const { setAppMode } = artworksSlice.actions;
export const { setArtworksQuery } = artworksSlice.actions;
export const { setSelectedApartmentId } = artworksSlice.actions;
export default artworksSlice.reducer;

//selectors
export const selectArtworkById = (state: RootState) => 
  state.artworks.artworksList.find(obj => obj.id === state.artworks.selectedApartmentId) 
export const selectAppMode = (state: RootState) => state.artworks.appMode;
export const selectSelectedApartmentId = (state: RootState) => state.artworks.selectedApartmentId;
export const selectArtworksQuery = (state: RootState) => state.artworks.artworksQuery;
export const selectAllArtworks = (state: RootState) => state.artworks.artworksList;