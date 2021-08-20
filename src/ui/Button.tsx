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
  background-color: black;
  border-radius: 4px;
  color: white;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25);

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    background-color: #222222;
  }
`;
