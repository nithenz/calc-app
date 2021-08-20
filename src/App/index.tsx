import styled from "@emotion/styled";
import React, { FC } from "react";
import CalculationsTable from "../CalculationsTable";
import { CalcContextProvider } from "../context";
import InputsPanel from "../InputsPanel";

/**
 * App
 * @returns App component
 */
const App: FC = () => {
  return (
    <CalcContextProvider>
      <Container>
        <ContentWrapper>
          <CalculationsTable />
          <InputsPanel />
        </ContentWrapper>
      </Container>
    </CalcContextProvider>
  );
};

export default App;

/**
 * App's container component
 */
const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

/**
 * App's content wrapper
 */
const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 58px;
  width: 100%;
  max-width: 648px;
  height: 100%;
  max-height: 398px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 5%;
`;
