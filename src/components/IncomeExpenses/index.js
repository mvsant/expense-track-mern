import React, { useContext } from "react";
import {cTheme, textColor} from '../../context/GlobalTheme';
import {container, div} from './theme';
import { GlobalContext } from "../../context/GlobalState";
import {} from '../../context/GlobalState';

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
    <div style={cTheme(theme,container)}>
      <div style={div}>
        <h4 style={cTheme(theme,textColor)}>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div style={div}>
        <h4 style={cTheme(theme,textColor)}>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
