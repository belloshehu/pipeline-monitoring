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
  text-align: center;
  padding: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 4rem;
  }
`;

export const HeroHeading = styled(motion.h1 as WebTarget)`
  font-size: 2rem;
  color: green;
  font-weight: bolder;
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 5rem;
    font-weight: 800;
  }
`;

export const HeroDescription = styled(motion.h1 as WebTarget)`
  font-size: 1rem;
  color: grey;
`;

export const HeroImage = styled(motion.img as WebTarget)`
  width: 100%;
  height: 500px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 400px;
  }
`;

export const HeroTextWrapper = styled(motion.div as WebTarget)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    gap: 1rem;
    padding: 0;
  }
`;
