import styled from "styled-components";

export const StyledStatistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 2rem;
  h3 {
    font-weight: lighter;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
