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
          imageUrl="/realtime.jpg"
          direction="row-reverse"
        />
        <Feature
          heading="Leakage distance estimation"
          description="Provides estimation of actual point of leakage to facilitate easy location and reduce loss."
          imageUrl="/location.jpg"
          direction=""
        />
        <Feature
          heading="Estimation of loss"
          description="Provides estimation of product's lost as a result of leakage."
          imageUrl="/barrel.jpg"
          direction="row-reverse"
        />
      </StyledFeatureList>
    </StyledFeatureListWrapper>
  );
};
