import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransaction/>
    </>
  );
}

export default App;
