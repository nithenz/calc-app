import styled from "@emotion/styled";

/**
 * Styled table component
 */
export const StyledTable = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  table-layout: fixed;
`;

/**
 * Table's head
 */
export const Head = styled.thead``;

/**
 * Table's body
 */
export const Body = styled.tbody`
  display: block;
  width: 100%;
  overflow: auto;
  height: 284px;
`;

/**
 * Table's head row
 */
export const HeadRow = styled.tr<{ appendPadding: number }>`
  border-bottom: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding-right: ${(props) => props.appendPadding}px;
`;

/**
 * Table's base row component
 */
export const Row = styled.tr`
  border-bottom: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
`;

/**
 * Table's base cell component
 */
export const Cell = styled.td`
  text-align: center;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  padding: 2px;
  border-right: 1px solid #e5e5e5;
  &:last-child {
    border-right: none;
  }
`;

/**
 * Table's value cell
 */
export const ValueCell = styled(Cell)`
  color: #ff5151;
`;

/**
 * Table's head cell
 */
export const HeadCell = styled.th`
  color: #373737;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  padding: 15px 0;
  border-right: 1px solid #e5e5e5;
  &:last-child {
    border-right: none;
  }
`;

/**
 * Operands value cell
 */
export const OperandsCell = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  place-items: center;
`;

/**
 * Operands cell delimiter border
 */
export const OperandsDelimitierBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: #e5e5e5;
  box-shadow: 0 2px 3px rgb(0 0 0 / 5%);
`;
