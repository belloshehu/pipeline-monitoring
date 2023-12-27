import { PipelineSectionType } from "../types";
import { StyledPipelineSection } from "./styles/PipelineSection.styled";

export const PipelineSection = ({
  detail,
}: {
  detail: PipelineSectionType;
}) => {
  console.log(detail);
  return (
    <StyledPipelineSection>
      <h3>{detail.text}</h3>
    </StyledPipelineSection>
  );
};
