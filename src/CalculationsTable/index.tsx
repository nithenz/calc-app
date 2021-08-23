import { useState } from "react";
import { useCalcHistory } from "../context";
import {
  StyledTable,
  Body,
  Head,
  HeadCell,
  HeadRow,
} from "./CalculationsTable.styled";
import CalculationValueRow from "./CalculationValueRow";
import { ReactComponent as QuestionIcon } from "../assets/question-icon.svg";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

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
          <HeadCell>
            <div
              css={css`
                position: relative;
              `}
            >
              HPN
              <QuestionIcon
                css={css`
                  position: absolute;
                  top: -2px;
                  margin-left: 1px;

                  & > path {
                    fill: #373737;
                  }
                `}
              />
            </div>
          </HeadCell>
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
          <CalculationValueRow
            key={calculation.date}
            calculation={calculation}
          />
        ))}
      </Body>
    </StyledTable>
  );
};

export default CalculationsTable;
