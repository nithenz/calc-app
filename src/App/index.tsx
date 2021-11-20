import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { FC, useCallback, useMemo, useState } from "react";
import CalculationsTable from "../CalculationsTable";
import { CalcContextProvider } from "../context";
import { AppearanceContext } from "../context/appearance";
import InputsPanel from "../InputsPanel";
import { Theme, ThemeAppearance, ThemeBw } from "../ui/theme";

/**
 * App
 * @returns App component
 */
const App: FC = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [appearance, setAppearance] = useState<ThemeAppearance>(
    defaultDark ? "dark" : "light"
  );

  const handleSetAppearance = useCallback(
    (newAppearanceValue: ThemeAppearance) => {
      setAppearance(newAppearanceValue);
    },
    []
  );

  const toggleAppearance = useCallback(() => {
    setAppearance((prevValue) => (prevValue === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    return {
      ...Theme,
      appearance: appearance,
      dark: appearance === "dark",
      bw: (appearance === "light"
        ? Theme.colors.black
        : Theme.colors.white) as ThemeBw,
      wb: (appearance === "light"
        ? Theme.colors.white
        : Theme.colors.black) as ThemeBw,
      borderGray: appearance === "dark" ? "#2d2d2d" : "#e5e5e5",
    };
  }, [appearance]);

  console.log(theme);

  return (
    <AppearanceContext.Provider
      value={{
        appearance,
        setAppearance: handleSetAppearance,
        toggleAppearance,
      }}
    >
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            html: {
              "color-scheme": appearance,
            },
          }}
        />
        <CalcContextProvider>
          <Container>
            <ContentWrapper>
              <CalculationsTable />
              <InputsPanel />
            </ContentWrapper>
          </Container>
        </CalcContextProvider>
      </ThemeProvider>
    </AppearanceContext.Provider>
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
  background-color: ${(props) => props.theme.wb};
  transition-timing-function: ease;
  transition-duration: 0.12s;
  transition-property: background-color, color, border-color, box-shadow, fill;
  * {
    transition-timing-function: ease;
    transition-duration: 0.12s;
    transition-property: background-color, color, border-color, box-shadow, fill;
  }
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
  background-color: ${(props) => props.theme.wb};
  border: 1px solid ${(props) => props.theme.borderGray};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 5%;
`;
