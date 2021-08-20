import styled from "@emotion/styled";
import React, { FC, useState } from "react";
import { ChangeEventHandler } from "react";
import { useCallback } from "react";
import { useCalcHistory } from "../context";
import Button from "../ui/Button";
import Input from "../ui/Input";

/**
 * InputsPanel
 * @returns InputsPanel component
 */
const InputsPanel: FC = () => {
  const { history, calc } = useCalcHistory();

  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");

  console.log(history);

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
  const handleCalcClick = useCallback(() => {
    const a = parseInt(firstOperand);
    const b = parseInt(secondOperand);
    if (a && b) {
      calc(a, b);
      setFirstOperand("");
      setSecondOperand("");
    }
  }, [firstOperand, secondOperand, calc]);

  return (
    <Container>
      <ItemsContainer>
        <Input value={firstOperand} onChange={handleFirstOperandInputChange} />
        <Button onClick={handleCalcClick}>CALC</Button>
        <Input
          value={secondOperand}
          onChange={handleSecondOperandInputChange}
        />
      </ItemsContainer>
    </Container>
  );
};

export default InputsPanel;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid #e5e5e5;
`;

/**
 * InputsPanel's container component
 */
const ItemsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 16px;
  max-width: 302px;
  margin: auto;
  place-items: center;
  width: 100%;
  height: 100%;
`;
