import { CSSProperties, useEffect, useRef } from "react";
import { Hero } from "../../components/Hero";
import { FeatureList } from "../../components/FeatureList";
import { Fireworks } from "@fireworks-js/react";
import type { FireworksHandlers } from "@fireworks-js/react";

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
    <>
      <Fireworks
        ref={ref}
        options={{
          opacity: 0.5,

          acceleration: 1.2,
          friction: 0.96,
          gravity: 1,
          particles: 90,

          explosion: 6,
          autoresize: true,
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#000",
          opacity: 0.1,
          scrollBehavior: "smooth",
        }}
      />
      <Hero />
      <FeatureList />
    </>
  );
};
