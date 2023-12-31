import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/app-context";
import { AppContextType } from "../types";
import { StyledHeader } from "./styles/Header.styled";

export const Header = () => {
  const { setShowSidebar } = useAppContext() as AppContextType;
  return (
    <>
      <StyledHeader>
        <Link to={"/"}>
          <h1>Pipeline monitoring</h1>
        </Link>
        <button
          className="btn"
          onClick={() => {
            setShowSidebar(true);
          }}>
          Simulation
        </button>
      </StyledHeader>
    </>
  );
};
