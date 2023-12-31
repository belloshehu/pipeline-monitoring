import { color } from "framer-motion";
import { StyledFeature } from "./styles/Feature.styled";
import {
  StyledFeatureList,
  StyledFeatureListHeading,
  StyledFeatureListWrapper,
} from "./styles/FeatureList.styled";
import { Feature } from "./Feature";

export const FeatureList = () => {
  return (
    <StyledFeatureListWrapper>
      <StyledFeatureListHeading>Available features</StyledFeatureListHeading>
      <StyledFeatureList>
        <Feature
          heading="Real time monitoring"
          description="Provides real-time status of every section of the pipeline"
          imageUrl="/pipeline.jpg"
        />
        <Feature
          heading="Leakage distance estimation"
          description="Provides estimation of actual point of leakage to facilitate easy location and reduce loss."
          imageUrl="/pipeline.jpg"
        />
      </StyledFeatureList>
    </StyledFeatureListWrapper>
  );
};
