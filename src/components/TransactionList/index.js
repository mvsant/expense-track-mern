import React , {useContext} from "react";
import "./index.css";
import {GlobalContext} from '../../context/GlobalState';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);

  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
        <li className="minus" id={transaction.id}>
          {transaction.text} <span>{transaction.amount}</span>
          <button className="delete-btn">x</button>
        </li>

        ))}
      </ul>
    </>
  );
};

export default TransactionList;
