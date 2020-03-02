import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./index.css";
import { themes } from "../../context/GlobalTheme";
import { h2, button } from "./theme";

const Header = () => {
  const { theme } = useContext(GlobalContext);
  const { changeTheme } = useContext(GlobalContext);

  console.log("TEMA" + theme);
  function cTheme(component) {
    return theme === "light" ? component.light : component.dark;
  }

  function handleTheme() {
    return theme === "light" ? "dark" : "light";
  }
  return (
    <>
      <h2 style={cTheme(h2)}>Expense tracker</h2>
      <button style={cTheme(button)}>Theme son</button>
      <button onClick={() => changeTheme(handleTheme())}>Change theme</button>
    </>
  );
};

export default Header;
