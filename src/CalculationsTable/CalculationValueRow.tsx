import { FC, memo } from "react";
import { Calculation } from "../context";
import {
  Cell,
  OperandsCell,
  Row,
  ValueCell,
  OperandsDelimitierBorder,
} from "./CalculationsTable.styled";

/**
 * Table's calculation values row props
 */
export interface CalculationsValueRowProps {
  calculation: Calculation;
}

/**
 * Table's calculation values row
 * @returns Table's calculation values row component
 */
const CalculationsValueRow: FC<CalculationsValueRowProps> = ({
  calculation,
}) => {
  const { date, operands, sum, division, remainder, hpn } = calculation;

  return (
    <Row key={date}>
      <Cell>
        <OperandsCell>
          <div>{operands.first}</div>
          <OperandsDelimitierBorder />
          <div>{operands.second}</div>
        </OperandsCell>
      </Cell>
      <ValueCell>{sum}</ValueCell>
      <ValueCell>{division.toFixed(2)}</ValueCell>
      <ValueCell>{remainder}</ValueCell>
      <ValueCell>{hpn || "-"}</ValueCell>
    </Row>
  );
};
export default memo(CalculationsValueRow, (prevProps, nextProps) => {
  return (
    prevProps.calculation.operands.first ===
      nextProps.calculation.operands.first &&
    prevProps.calculation.operands.second ===
      nextProps.calculation.operands.second
  );
});
