import { useCallback } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext, FC } from "react";
import { getLargestPrimeNubmerBetween } from "../math";

export interface Calculation {
  operands: {
    first: number;
    second: number;
  };

  sum: number;
  division: number;
  remainder: number;
  hpn: number | null;

  date: number;
}

export interface CalcOptions {
  appendToHistory?: boolean;
}

export interface CalcContextInterface {
  history: Calculation[];
  calc: (a: number, b: number, options?: CalcOptions) => Calculation;
}

export const CalcContext = createContext<CalcContextInterface>({} as any);

export const CalcContextProvider: FC = ({ children }) => {
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  const calc = useCallback<CalcContextInterface["calc"]>(
    (a, b, { appendToHistory } = { appendToHistory: true }) => {
      const start = a < b ? a : b;
      const end = a < b ? b : a;

      const calculationItem: Calculation = {
        date: Date.now(),
        division: a / b,
        sum: a + b,
        remainder: a % b,
        operands: {
          first: a,
          second: b,
        },
        hpn: getLargestPrimeNubmerBetween(
          start < 0 ? 0 : start,
          end < 0 ? 0 : end
        ),
      };

      if (appendToHistory) {
        setCalculations((prevCalculations) => [
          ...prevCalculations,
          calculationItem,
        ]);
      }

      return calculationItem;
    },
    []
  );

  return (
    <CalcContext.Provider value={{ history: calculations, calc }}>
      {children}
    </CalcContext.Provider>
  );
};

export function useCalcHistory() {
  return useContext(CalcContext);
}
