import { useEffect, useRef } from "react";
import { Hero } from "../../components/Hero";
import { FeatureList } from "../../components/FeatureList";
import { Fireworks } from "@fireworks-js/react";
import type { FireworksHandlers } from "@fireworks-js/react";
import { StyledHome } from "../../components/styles/Home.styled";

export const Home = () => {
  const ref = useRef<FireworksHandlers>(null);

  const toggle = () => {
    if (!ref.current) return;
    if (ref.current.isRunning) {
      ref.current.stop();
    } else {
      ref.current.start();
    }
  };

  useEffect(() => {
    toggle();
  }, []);

  return (
    <StyledHome>
      <Fireworks
        ref={ref}
        options={{
          opacity: 1,
          acceleration: 1.2,
          friction: 0.96,
          gravity: 1,
          particles: 100,
          explosion: 10,
          autoresize: true,
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: -1,
          background: "#000",
          opacity: 0.1,
          scrollBehavior: "smooth",
        }}
      />
      <Hero />
      <FeatureList />
    </StyledHome>
  );
};
