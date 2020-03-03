import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./style.css";

const ThemeButton = () => {
  const { theme } = useContext(GlobalContext);
  const { changeTheme } = useContext(GlobalContext);

  function handleTheme() {
    return theme === "light" ? "dark" : "light";
  }

  return (
    <>
      <input id="input-bulb"type="checkbox" onClick={() => changeTheme(handleTheme())}/>
      <label id="bulb" htmlFor="input-bulb"></label>
    </>
  );
};

export default ThemeButton;
