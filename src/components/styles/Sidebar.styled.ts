import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSidebar = styled(motion.aside).attrs(() => ({
  animate: {
    scale: [0.2, 0.5, 0.8, 1],
    rotate: [0, 180, 270, 360],
    translate: ["-100%", "-15%", "-10%", "0%"],
    opacity: 1,
  },
  transition: {
    duration: 1,
    ease: "easeInOut",
    times: [0.1, 0.2, 0.4, 1],
  },
  exit: {
    opacity: 0.4,
  },
}))`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  min-height: fit-content;
  background-color: white;
  box-shadow: 0px 0px 40px 2000px rgba(100, 100, 100, 0.8);

  @media screen and (min-width: ${({ theme }) => theme.screen.mobile}) {
    width: 30%;
    right: 0;
    left: none;
    top 2rem;
  }
`;

export const SidebarHeader = styled.div`
  border-bottom: 1px solid grey;
  background-color: green;
  color: white;
  text-align: center;
  padding: 1rem;
`;
export const SidebarBody = styled(motion.div).attrs(() => ({
  initial: { scale: 0.2 },
  animate: { scale: 1 },
  transition: {
    ease: "easeInOut",
    staggerChildren: 0.25,
  },
}))`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  padding: 1rem;
`;

export const SidebarBodyItem = styled(motion.div).attrs(() => ({
  initial: {
    translateX: "-50%",
    x: -100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    translateX: "0%",
    x: 0,
  },
  transition: {
    ease: "easeOut",
  },
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 0.4rem;
`;

export const StyledFaTimes = styled.div`
  position: absolute;
  right: 1rem;
  top: 0.6rem;
  color: red;
  font-size: 1.6rem;
`;
