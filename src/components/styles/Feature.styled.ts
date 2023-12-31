import styled, { WebTarget } from "styled-components";
import { motion } from "framer-motion";
import { HeroImage } from "./Hero.Styled";

export const StyledFeature = styled(motion.div as WebTarget)`
  width: 100%;
  box-shadow: 0px 0px 10px rgba(110, 110, 110, 0.7);
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  //   background-color: white;
  color: white;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const StyledFeatureTextWrapper = styled(motion.div as WebTarget)`
  display: flex;
  flex-direction: column;
  alin-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  text-align: center;
  padding-top: 2rem;

  @media screen and (min-width: 768px) {
    gap: 2rem;
    padding: 3rem;
    text-align: left;
    padding-top: 0rem;
  }
`;

export const StyledFeatureImage = styled(HeroImage)`
  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;
