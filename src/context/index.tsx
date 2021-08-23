import { useCallback } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext, FC } from "react";
const worker = require("workerize-loader!../math/calc.worker.ts"); // eslint-disable-line import/no-webpack-loader-syntax

// Web Worker instnace
// const workerInstance = worker();

/**
 * Calculation type
 */
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

/**
 * Calculate function options
 */
export interface CalcOptions {
  appendToHistory?: boolean;
}

/**
 * Calculation history context interface
 */
export interface CalcContextInterface {
  history: Calculation[];
  calc: (a: number, b: number, options?: CalcOptions) => Promise<Calculation>;
}

/**
 * Calculation history context instance object
 */
export const CalcContext = createContext<CalcContextInterface>({} as any);

export const CalcContextProvider: FC = ({ children }) => {
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  const calc = useCallback<CalcContextInterface["calc"]>(
    async (a, b, { appendToHistory } = { appendToHistory: true }) => {
      const start = a < b ? a : b;
      const end = a < b ? b : a;

      return new Promise<Calculation>(async (resolve) => {
        const workerInstance = worker();
        await workerInstance.ready;
        workerInstance.addEventListener("message", (message: any) => {
          console.log("message", message);

          if (!message.data.result) {
            return
          }

          const calculation = { ...message.data.result, date: Date.now() };
          if (appendToHistory) {
            setCalculations((prevCalculations) => [
              ...prevCalculations,
              calculation,
            ]);
          }
          workerInstance.terminate();
          return resolve(calculation);
        });

        workerInstance.calculate(start < 0 ? 0 : start, end < 0 ? 0 : end);
      });
    },
    [worker]
  );

  return (
    <CalcContext.Provider value={{ history: calculations, calc }}>
      {children}
    </CalcContext.Provider>
  );
};

/**
 * To use calculation history hook
 */
export function useCalcHistory() {
  return useContext(CalcContext);
}
