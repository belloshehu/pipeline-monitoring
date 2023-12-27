import { useAppContext } from "../contexts/app-context";
import { AppContextType } from "../types";
import {
  SidebarBody,
  SidebarBodyItem,
  SidebarHeader,
  StyledFaTimes,
  StyledSidebar,
} from "./styles/Sidebar.styled";
import { FaTimes } from "react-icons/fa";

export const Sidebar = ({ title }: { title: string }) => {
  const { setShowSidebar } = useAppContext() as AppContextType;
  return (
    <StyledSidebar>
      <SidebarHeader>{title}</SidebarHeader>
      <StyledFaTimes>
        <FaTimes
          onClick={() => {
            setShowSidebar(false);
          }}
        />
      </StyledFaTimes>
      <SidebarBody>
        <SidebarBodyItem>
          <h4>Section 1</h4>
          <FaTimes />
          <button className="btn">option</button>
        </SidebarBodyItem>
        <SidebarBodyItem>
          <h4>Section 2</h4>
          <FaTimes />
          <button className="btn">option</button>
        </SidebarBodyItem>
        <SidebarBodyItem>
          <h4>Section 3</h4>
          <button className="btn">option</button>
        </SidebarBodyItem>
        <SidebarBodyItem>
          <h4>Section 4</h4>
          <button className="btn">option</button>
        </SidebarBodyItem>
      </SidebarBody>
    </StyledSidebar>
  );
};
