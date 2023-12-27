import { StyledStatus } from "./styles/Status.styled";
import { pipelineSections } from "../utils/mock-data";

export const Status = () => {
  return (
    <StyledStatus>
      <h3>Status | Ok</h3>
      <h3>Pipeline Sections | {pipelineSections.length}</h3>
      <h3>
        Total length|{" "}
        {pipelineSections.reduce(function (total, section, _, __) {
          return total + section.length;
        }, 0)}{" "}
        meters
      </h3>
    </StyledStatus>
  );
};
