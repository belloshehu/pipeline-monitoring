import {
  StyledHero,
  HeroDescription,
  HeroTextWrapper,
  HeroHeading,
  HeroImage,
} from "./styles/Hero.styled";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./Button";

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
