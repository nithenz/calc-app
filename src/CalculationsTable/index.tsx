import {  useState } from "react";
import { useCalcHistory } from "../context";
import {
  StyledTable,
  Body,
  Head,
  HeadCell,
  HeadRow,
} from "./CalculationsTable.styled";
import CalculationValueRow from "./CalculationValueRow";

/**
 * Calculation history table
 * @returns Calctulation history table component
 */
const CalculationsTable = () => {
  const { history } = useCalcHistory();

  // Scroll bar overflow padding in pxs
  const [overflow, setOverflow] = useState(0);

  return (
    <StyledTable>
      <Head>
        <HeadRow appendPadding={overflow}>
          <HeadCell>Operands</HeadCell>
          <HeadCell>Sum</HeadCell>
          <HeadCell>Div</HeadCell>
          <HeadCell>Rem</HeadCell>
          <HeadCell>HPN</HeadCell>
        </HeadRow>
      </Head>
      <Body
        ref={(el) => {
          if (el) {
            setOverflow(el.offsetWidth - el.clientWidth);
          }
        }}
      >
        {history.map((calculation) => (
          <CalculationValueRow calculation={calculation} />
        ))}
      </Body>
    </StyledTable>
  );
};

export default CalculationsTable;
