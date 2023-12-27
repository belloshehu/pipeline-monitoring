import styled from "styled-components";

export const StyledPipelineSection = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.pipelineSection};
  padding: 3rem;
  width: 100%;
  color: ${({ theme }) => theme.color.pipelineSection};
  border-radius: 0px;
  box-shadow: 2px 2px 10px 35px rgba(100, 100, 100, 0.4);
  transition: all 300ms linear;
  h3 {
    text-align: center;
    font-weight: lighter;
    text-shadow: 10px 15px 20px black;
  }
  @media screen and (min-width: 768px) {
    padding: 3rem;
  }

  &:hover {
    box-shadow: 2px 2px 10px 35px rgba(100, 100, 100, 0.6);
    transform: scale(1.05);
  }
`;
