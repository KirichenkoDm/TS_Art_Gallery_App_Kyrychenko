import {useFormik} from "formik"
import React, { FC, KeyboardEvent } from "react";
import { useAppDispatch } from "../../Store/store.hooks";
import { IArtwork } from "../../Interfaces";
import { EAppMode, EArtworkType } from "../../Enums";
import { FormValidator } from "../../Unils";
import { addNewArtworkThunk, getAllArtworksThunk } from "../../Store/Artworks/Artworks.api";
import { setAppMode } from "../../Store/Artworks/Artworks.slice";
import { StyledUniversalForm } from "./UniversalForm.styled";
import { IUniversalFormProps } from "./UniversalForm.props";

const emptyValues = {
  title: "",
  artist: "",
  price: 0,
  type: EArtworkType.literature,
  availability: true,
} as IArtwork;

export const UniversalForm: FC<IUniversalFormProps> = (props) => {
  const dispatch = useAppDispatch();
  const initialValues = props.passedValues || emptyValues
  const formik = useFormik({
    initialValues,
    validate: FormValidator,
    onSubmit: async (values, actions) => {
      await dispatch(addNewArtworkThunk(values))
      await dispatch(getAllArtworksThunk());
      await dispatch(setAppMode(EAppMode.viewing))
      actions.resetForm();
    },
  });

  const handleNumberInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key.match(/^[.e+-]/))
      e.preventDefault();
  };

  return (
    <StyledUniversalForm
      id="modal-form"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <label>
        Artwork Title
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Artwork title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ?
          <p>{formik.errors.title}</p>
          :
          <span/>}
      </label>
      <label>
        Artist Name
        <input
          id="artist"
          name="artist"
          type="text"
          placeholder="Artist name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.artist}
        />
        {formik.touched.artist && formik.errors.artist ?
          <p>{formik.errors.artist}</p>
          :
          <span/>}
      </label>
      <div>
        <label>
          Artwork Price ＄
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Artwork price ($)"
            onKeyDown={handleNumberInput}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ?
            <p>{formik.errors.price}</p>
            :
            <span/>}
        </label>
        <label flex-grow="1">
          Artwork Type
          <select
            id="type"
            name="type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.type}
          >
          {Object.keys(EArtworkType).map(artworkType => 
            <option key={artworkType} value={artworkType}>
              {artworkType}
            </option> )}
          </select>
        </label>
        <label>
          Available
          <input
            id="availability"
            name="availability"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value="availability"
            checked={formik.values.availability}
          />
        </label>
      </div>
      <div className="button-container"><button type="submit"> 
          {props.passedValues? "Submit edit" : "Add artwork"}
      </button></div>
    </StyledUniversalForm>
  );
};
