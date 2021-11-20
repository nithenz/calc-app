import styled from "@emotion/styled";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: FC<InputProps> = (props) => {
  return <StyledInput spellCheck={false} {...props} />;
};

export default Input;

const StyledInput = styled.input`
  border: 2px solid ${(props) => props.theme.borderGray};
  background-color: ${(props) => props.theme.wb};
  color: ${(props) => props.theme.bw};
  border-radius: 4px;
  outline: none;
  box-shadow: none;
  padding: 5px 8px 4px 8px;
  width: 100%;
  line-height: 16px;
  font-weight: 600;
  text-align: center;
`;
