import {
  StyledFeature,
  StyledFeatureImage,
  StyledFeatureTextWrapper,
} from "./styles/Feature.styled";
import { FeatureType } from "../types";

export const Feature = ({ heading, description, imageUrl }: FeatureType) => {
  return (
    <StyledFeature>
      <StyledFeatureTextWrapper>
        <h1>{heading}</h1>
        <p>{description}</p>
      </StyledFeatureTextWrapper>
      <StyledFeatureImage src={imageUrl} />
    </StyledFeature>
  );
};
