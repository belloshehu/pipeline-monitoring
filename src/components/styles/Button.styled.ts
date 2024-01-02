import styled, { WebTarget } from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button as WebTarget).attrs(() => ({
  // drag: "x",
  initial: { scale: 0.6 },
  animate: { scale: 1 },
  transition: { duration: 0.3 },
  whileHover: { scale: 1.2 },
  // dragConstraints: { left: -100, right: 100 },
}))`
  background: ${({ theme, bgColor }) => bgColor || theme.backgroundColor};
  color: ${({ color, theme }) => color || theme.color};
  padding: 0.6rem 1rem;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 0.4rem;
`;
