import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from './components/Balance';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
    <Balance/>
    </>
  );
}

export default App;
