import React, { useContext } from "react";
import { cTheme, textColor, textPositive, textNegative } from "../../context/GlobalTheme";
import { container, div, lineBar} from "./theme";
import { GlobalContext } from "../../context/GlobalState";
import {numberWithCommas} from '../../utils/format';

const IncomeExpenses = () => {
  const { transactions, theme } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div style={cTheme(theme, container)}>
      <div style={Object.assign({}, div, lineBar)}>
        <h4 style={cTheme(theme, textColor)}>Income</h4>
        <p style={textPositive}>${numberWithCommas(income)}</p>
      </div>
      <div style={div}>
        <h4 style={cTheme(theme, textColor)}>Expense</h4>
        <p style={textNegative}>${numberWithCommas(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
