import { useEffect, useState } from "react";
import { PipelineSectionType } from "../types";
import { StyledPipelineSection } from "./styles/PipelineSection.styled";

export const PipelineSection = ({
  detail,
  data,
}: {
  detail: PipelineSectionType;
  data: "0" | "1";
}) => {
  const [isLeaking, setIsLeaking] = useState(false);

  const numbericStringToBool = (numbericString: "0" | "1") => {
    return numbericString === "1" ? true : false;
  };

  useEffect(() => {
    setIsLeaking(numbericStringToBool(data));
  });
  return (
    <StyledPipelineSection $isLeaking={isLeaking}>
      <h3>
        {detail.text}: {isLeaking ? "Leaking" : "Normal"}
      </h3>
    </StyledPipelineSection>
  );
};
