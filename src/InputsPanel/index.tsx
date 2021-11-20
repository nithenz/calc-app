import styled from "@emotion/styled";
import React, { FC, useState } from "react";
import { ChangeEventHandler } from "react";
import { useCallback } from "react";
import { useCalcHistory } from "../context";
import { useAppearance } from "../context/appearance";
import Button from "../ui/Button";
import Input from "../ui/Input";

/**
 * InputsPanel
 * @returns InputsPanel component
 */
const InputsPanel: FC = () => {
  const { appearance, toggleAppearance } = useAppearance();
  const { calc } = useCalcHistory();

  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");

  // Handles 1st operand input changes
  const handleFirstOperandInputChange = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >((e) => {
    setFirstOperand(e.target.value);
  }, []);

  // Handles 2nd operand input changes
  const handleSecondOperandInputChange = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >((e) => {
    setSecondOperand(e.target.value);
  }, []);

  // Handles calc click
  const handleCalcClick = useCallback(async () => {
    const a = parseInt(firstOperand);
    const b = parseInt(secondOperand);
    if (a && b) {
      setFirstOperand("");
      setSecondOperand("");
      await calc(a, b);
    }
  }, [firstOperand, secondOperand, calc]);

  const handleToggleAppearance = useCallback(() => {
    toggleAppearance();
  }, [toggleAppearance]);

  return (
    <Container>
      <ItemsContainer>
        <div></div>
        <InputsContainer>
          <FixedInput
            value={firstOperand}
            onChange={handleFirstOperandInputChange}
          />
          <Button onClick={handleCalcClick}>CALC</Button>
          <FixedInput
            value={secondOperand}
            onChange={handleSecondOperandInputChange}
          />
        </InputsContainer>
        <AppearanceToggle onClick={handleToggleAppearance}>
          {appearance === "dark" && <MoonSvg size={20} />}
          <MoonSvg size={20} />
        </AppearanceToggle>
      </ItemsContainer>
    </Container>
  );
};

export default InputsPanel;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${(props) => props.theme.borderGray};
`;

/**
 * InputsPanel's container component
 */
const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  max-width: 100%;
  padding: 0 2.5rem;
  margin: 0;
  place-items: center;
  width: 100%;
  height: 100%;
`;

const InputsContainer = styled.div`
  display: flex;

  margin: auto;

  & > input,
  & > button {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const FixedInput = styled(Input)`
  min-width: 6rem;
`;

const AppearanceToggle = styled.button`
  display: flex;
  position: relative;

  width: 2rem;
  height: 2rem;

  border-radius: 0.5rem;

  margin-left: auto;
  align-items: center;

  background-color: ${(props) =>
    props.theme.dark ? "#161616" : props.theme.borderGray};
  color: ${(props) => props.theme.bw};

  cursor: pointer;

  border: none;
  outline: none;
  box-shadow: none;

  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  svg {
    margin: auto;
    padding-left: 1px;
    padding-top: 0.5px;
    position: absolute;

    &:first-child {
      ${(props) => props.theme.dark && `filter: blur(4px);`}
    }
  }
`;

const MoonSvg = ({ size }: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
};
