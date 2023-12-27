import styled from "styled-components";

export const StyledSidebar = styled.div`
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
export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  padding: 1rem;
`;

export const SidebarBodyItem = styled.div`
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
