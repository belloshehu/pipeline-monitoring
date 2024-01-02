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
    <StyledFeature
      direction={direction}
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}>
      <StyledFeatureTextWrapper>
        <StyledFeatureHeading>{heading}</StyledFeatureHeading>
        <p>{description}</p>
      </StyledFeatureTextWrapper>
      <StyledFeatureImage src={imageUrl} />
    </StyledFeature>
  );
};
