import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import BodyWrapper from "./components/BodyWrapper";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BodyWrapper>
        <header>
          <Header />
        </header>
        <main>
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
          <TransactionList />
        </main>
      </BodyWrapper>
    </GlobalProvider>
  );
}

export default App;
