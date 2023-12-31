import styled, { WebTarget } from "styled-components";
import { motion } from "framer-motion";

export const StyledFeatureList = styled(motion.section as WebTarget)`
  width: 100%;
  display: flex;
  gap: 4rem;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
`;

export const StyledFeatureListWrapper = styled(motion.div as WebTarget)`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledFeatureListHeading = styled(motion.h1 as WebTarget)`
  width: 100%;
  color: white;
  text-align: center;
  font-size: 3rem;
  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`;
