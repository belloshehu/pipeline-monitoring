import { PipelineSectionType } from "../types";
import { PipelineSection } from "./PipelineSection";
import { StyledPipeline } from "./styles/Pipeline.styled";

export const Pipeline = ({
  pipelineSections,
  data,
}: {
  pipelineSections: PipelineSectionType[];
  data: string[];
}) => {
  return (
    <StyledPipeline>
      {pipelineSections.map((section: PipelineSectionType, index: number) => (
        <PipelineSection
          detail={section}
          key={section.id}
          data={data[index] as "0" | "1"}
        />
      ))}
    </StyledPipeline>
  );
};
