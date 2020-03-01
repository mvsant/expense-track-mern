import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

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
    </>
  );
}

export default App;
