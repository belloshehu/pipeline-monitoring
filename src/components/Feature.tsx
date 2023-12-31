import {
  StyledFeature,
  StyledFeatureHeading,
  StyledFeatureImage,
  StyledFeatureTextWrapper,
} from "./styles/Feature.styled";
import { FeatureType } from "../types";

export const Feature = ({
  heading,
  description,
  imageUrl,
  direction,
}: FeatureType) => {
  return (
    <StyledFeature direction={direction}>
      <StyledFeatureTextWrapper>
        <StyledFeatureHeading>{heading}</StyledFeatureHeading>
        <p>{description}</p>
      </StyledFeatureTextWrapper>
      <StyledFeatureImage src={imageUrl} />
    </StyledFeature>
  );
};
