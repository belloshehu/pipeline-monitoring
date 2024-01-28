import styled from "styled-components";

export const StyledStatus = styled.div`
  display: flex;
  justify-content: space-evently;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  background-color: black;
  color: green;
  gap: 7px;
  min-height: 5rem;
  margin-bottom: 5rem;
  font-size: 1rem;
  width: 100%;
  position: relative;
  h3 {
    text-shadow: 10px 5px 30px white;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
