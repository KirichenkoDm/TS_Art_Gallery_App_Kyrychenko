import { IArtwork } from "../../Interfaces";

export interface IUniversalFormProps {
  passedValues: IArtwork | null;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}