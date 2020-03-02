import React, { useContext } from "react";
import "./index.css";
import { textColor } from "./theme";
import {cTheme} from '../../context/GlobalTheme';

import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
  const { transactions, theme} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <div className="container">
      <h4 style={cTheme(theme,textColor)}>Your Balance</h4>
      <h1 style={cTheme(theme,textColor)}>${total}</h1>
    </div>
  );
};

export default Balance;
