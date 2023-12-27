import styled from "styled-components";

export const StyledPipeline = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 5px;
  margin-bottom: 2rem;
  width: 100%;
  overflow-x: hidden;
  animation-name: scroll;
  animation-duration: 15000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  max-width: 100%;
  &:hover {
    transform: translate(0%);
    animation-play-state: paused;
  }
  @keyframes scroll {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    @keyframes scroll {
      from {
        transform: scale(0.8);
      }
      to {
        transform: scale(1);
      }
    }
  }
`;
