import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor.header};
  box-shadow: 1px 2px 1px 1px rgba(100, 100, 100, 0.1);
  padding: 1rem;

  h1 {
    font-family: "forte", "Lucida Sans", Arial, sans-serif;
    color: white;
    text-shadow: 20px 10px 30px white;
    font-size: 1rem;
  }
  h1:hover {
    color: grey;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }
`;
