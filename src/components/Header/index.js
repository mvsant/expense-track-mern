import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./index.css";
import {cTheme} from '../../context/GlobalTheme';
import { h2, button } from "./theme";

const Header = () => {
  const { theme } = useContext(GlobalContext);
  const { changeTheme } = useContext(GlobalContext);

  function handleTheme() {
    return theme === "light" ? "dark" : "light";
  }
  return (
    <>
      <h2 style={cTheme(theme,h2)}>Expense tracker</h2>
      <button style={cTheme(theme,button)}>Theme son</button>
      <button onClick={() => changeTheme(handleTheme())}>Change theme</button>
    </>
  );
};

export default Header;
