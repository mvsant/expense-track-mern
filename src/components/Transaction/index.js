import React , {useContext} from "react";
import "./index.css";

const Transaction = ({transaction}) => {

  return (
    /* Transaction */
    <li className="minus" /* id={transaction.id} */>
    {transaction.text} <span>{transaction.amount}</span>
    <button className="delete-btn">X</button>
  </li>
  );
};

export default Transaction;
