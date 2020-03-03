import React, { useContext } from "react";
import {deleteButton, deleteButtonHover,listItem, borderPositive, borderNegative} from './theme';
import { GlobalContext } from "../../context/GlobalState";
import {cTheme, useHover} from '../../context/GlobalTheme';

const Transaction = ({ transaction }) => {
  const { deleteTransaction, theme } = useContext(GlobalContext);
  const [hoverRef, isHovered] = useHover();

  const sign = transaction.amount < 0 ? "-" : "+";

  function handleMarker(sign) {
    return sign === '-' ? borderNegative:borderPositive
  }

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}
    style={Object.assign({},cTheme(theme,listItem),handleMarker(sign))}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button ref={hoverRef}
        style={isHovered ? cTheme(theme,deleteButton) : cTheme(theme,deleteButtonHover)}
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
