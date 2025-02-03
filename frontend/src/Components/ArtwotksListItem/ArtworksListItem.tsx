import React, { FC } from "react";
import { IListItemProps } from "./ArtworksListItem.props";
import { StyledArtworksListItem } from "./ArtworksListItem.styled";
import { useAppDispatch } from "../../Store/store.hooks";
import { setSelectedApartmentId } from "../../Store/Artworks/Artworks.slice";


export const ArtworksListItem: FC<IListItemProps> = (props) => {
  const dispatch = useAppDispatch();
  
  const handleSelectListItem = () => {
    dispatch(setSelectedApartmentId(props.artworkData.id));
  }

  return (
    <StyledArtworksListItem onClick={handleSelectListItem} $selected={props.selected}>
      <img src={require(`../../Images/${props.artworkData.type}.png`)} alt={props.artworkData.type}/>
      <div>
        <h2>
          <span>{props.artworkData.title}</span>
          <span>＄{props.artworkData.price}</span>
        </h2>
        <p>
          <span>{props.artworkData.artist}</span>
          <span className="unavailable">{props.artworkData.availability ? "" : "Unavailable"}</span>
        </p>
      </div>
    </StyledArtworksListItem>
  );
};