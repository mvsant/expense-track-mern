import React, { useState, useContext } from "react";
import {cTheme, useHover} from '../../context/GlobalTheme';
import { button, buttonHover } from "./theme";
import { GlobalContext } from "../../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [hoverRef, isHovered] = useHover();

  const { addTransaction, theme } = useContext(GlobalContext);

  const onSubmit = event => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={event => setText(event.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={event => setAmount(event.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button ref={hoverRef}
        
        style={isHovered ? buttonHover : button}>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
