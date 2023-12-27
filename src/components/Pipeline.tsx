import { PipelineSectionType } from "../types";
import { PipelineSection } from "./PipelineSection";
import { StyledPipeline } from "./styles/Pipeline.styled";

export const Pipeline = ({
  pipelineSections,
}: {
  pipelineSections: PipelineSectionType[];
}) => {
  console.log(pipelineSections);
  return (
    <StyledPipeline>
      {pipelineSections.map((section: PipelineSectionType) => (
        <PipelineSection detail={section} key={section.id} />
      ))}
    </StyledPipeline>
  );
};
