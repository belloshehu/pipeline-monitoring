import styled, { WebTarget } from "styled-components";
import { motion } from "framer-motion";

export const StyledHero = styled(motion.div as WebTarget)`
  height: 100vh;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HeroHeading = styled(motion.h1 as WebTarget)`
  font-size: 2rem;
  color: green;
  font-weight: bolder;
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroDescription = styled(motion.h1 as WebTarget)`
  font-size: 1rem;
  color: grey;
`;

export const HeroImage = styled(motion.img as WebTarget)`
  width: 100%;
  height: 300px;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 400px;
  }
`;

export const HeroTextWrapper = styled(motion.div as WebTarget)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
`;
