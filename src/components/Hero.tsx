import { MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./Button";

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

export const Hero: React.FC = () => {
  return (
    <StyledHero whileView={{ translateY: 100 }}>
      <MotionConfig transition={{ duration: 0.5, ease: "linear" }}>
        <HeroTextWrapper
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 0 }}
          // whileHover={{ scale: 0.8 }}
        >
          <HeroHeading>Pipeline monitoring</HeroHeading>
          <HeroDescription>
            Monitoring and detection of pipeline vandalization made easy and
            effective
          </HeroDescription>
          <Link to={"/monitoring"}>
            <Button text="Get Started" bgColor="" color="" />
          </Link>
        </HeroTextWrapper>

        <HeroImage
          src="/pipeline.jpg"
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 0 }}
          whileHover={{ scale: 0.8 }}
        />
      </MotionConfig>
    </StyledHero>
  );
};
