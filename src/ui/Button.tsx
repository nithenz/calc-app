import styled from "@emotion/styled";
import { FC } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;

const StyledButton = styled.button`
  padding: 4px 20px;
  background-color: ${(props) => props.theme.bw};
  border-radius: 4px;
  color: ${(props) => props.theme.wb};
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.theme.dark ? "none" : `0 6px 8px rgba(0, 0, 0, 0.25)`};

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.theme.dark
        ? "0 6px 8px rgba(255,255,255,0.25)"
        : `0 0 0 rgba(0, 0, 0, 0)`};
    background-color: ${(props) => (props.theme.dark ? "#fafafa" : "#222222")};
  }
`;
