import { BASE_URL } from ".";
import { IArtwork, IArtworksQuery, IArtworkWalidation } from "../Interfaces";

export const GenerateUrl = (query: IArtworksQuery) => {
  let url = BASE_URL + "?";
  if (query.priceSortOrder) {
    url += `price=${query.priceSortOrder}&`
  }
  if (query.artist) {
    url += `artist=${query.artist}&`
  }
  if (query.type) {
    url += `type=${query.type}`
  }
  return url;
};

export const FormValidator = (values: IArtwork) => {
  const errors = {} as IArtworkWalidation;

  if (!values.title) {
    errors.title = "Can't be empty."
  } else if (values.title.length > 99) {
    errors.title = "Title is too long (max 99 symbols)";
  }

  if (!values.artist) {
    errors.artist = "Can't be empty."
  } else if (values.artist.length > 50) {
    errors.artist = "Artist name is too long (max 55 symbols)";
  }

  if (!values.price) {
    errors.price = "Can't be less then 1$";
  } else if (values.price < 1) {
    errors.price = "Can't be less then 1$";
  }

  return errors;
};