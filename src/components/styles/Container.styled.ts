import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0rem 2rem;

  @media screen and (min-width: 578px) {
    flex-direction: row;
  }
`;
