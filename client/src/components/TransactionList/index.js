import React, { useContext, useEffect } from "react";
import { list } from "./theme";
import Transaction from "../Transaction";
import { cTheme, textColor } from "../../context/GlobalTheme";
import { GlobalContext } from "../../context/GlobalState";

const TransactionList = () => {
  const { transactions, theme, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  },[])

  return (
    <>
      <h3 style={cTheme(theme, textColor)}>History</h3>
      <ul style={list}>
        {transactions.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
