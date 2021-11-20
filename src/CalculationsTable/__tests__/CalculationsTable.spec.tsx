import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as CalcContext from "../../context";
import CalculationsTable from "..";
import CalculationValueRow from "../CalculationValueRow";

Enzyme.configure({ adapter: new Adapter() });

test("Table with empty history", () => {
  const Table = () => {
    return (
      <CalcContext.CalcContextProvider>
        <CalculationsTable />
      </CalcContext.CalcContextProvider>
    );
  };

  const el = shallow(<Table />);

  expect(el.dive().find(CalculationValueRow).length).toEqual(0);
});

test("Table with 3 calculations in history", () => {
  const mockHistoryValue: CalcContext.Calculation[] = new Array(3).fill({
    operands: { first: 1, second: 2 },
    sum: 3,
    division: 3,
    date: 1000,
    hpn: 1001,
    remainder: 1002,
  } as CalcContext.Calculation);

  // We just need unique date fields, because in table we are iterating
  // by them our value rows using its value as key props
  const uniqueMockHistoryValue = mockHistoryValue.map((item, index) => ({...item,date:index}))

  const Table = () => {
    return (
      <CalcContext.CalcContext.Provider
        value={{ history: uniqueMockHistoryValue, calc: jest.fn() }}
      >
        <CalculationsTable />
      </CalcContext.CalcContext.Provider>
    );
  };

  const el = mount(<Table />);
  expect(el.find(CalculationValueRow).length).toEqual(3);
});
