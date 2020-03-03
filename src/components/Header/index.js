import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { cTheme, textColor } from "../../context/GlobalTheme";
import { button } from "./theme";

const Header = () => {
  const { theme } = useContext(GlobalContext);
  const { changeTheme } = useContext(GlobalContext);

  function handleTheme() {
    return theme === "light" ? "dark" : "light";
  }
  return (
    <>
      <h2 style={cTheme(theme, textColor)}>Expense tracker</h2>
      <button style={cTheme(theme, button)}>Theme son</button>
      <button onClick={() => changeTheme(handleTheme())}>Change theme</button>
    </>
  );
};

export default Header;
