import styled from "styled-components";

const StyledIndicator = styled.span<{ $connected: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ theme, $connected }) =>
    $connected
      ? theme.connectionColor.connected
      : theme.connectionColor.disconnected};
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Indicator = ({ connected }: { connected: boolean }) => {
  return <StyledIndicator $connected={connected} />;
};
