import styled, { WebTarget } from "styled-components";
import { motion } from "framer-motion";
import { Hero } from "../../components/Hero";
import { FeatureList } from "../../components/FeatureList";

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeatureList />
    </div>
  );
};
