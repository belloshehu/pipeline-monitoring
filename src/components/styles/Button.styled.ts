import styled, { WebTarget } from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button as WebTarget)`
  background: ${({ theme, bgColor }) => bgColor || theme.backgroundColor};
  color: ${({ color, theme }) => color || theme.color};
  padding: 0.6rem 1rem;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 0.4rem;
`;
