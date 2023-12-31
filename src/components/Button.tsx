import { StyledButton } from "./styles/Button.styled";

export const Button = ({
  text,
  bgColor,
  color,
}: {
  text: string;
  color: string;
  bgColor: string;
}) => {
  return (
    <StyledButton bgColor={bgColor} color={color}>
      {text}
    </StyledButton>
  );
};
