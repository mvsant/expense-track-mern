import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { cTheme, textColor } from "../../context/GlobalTheme";
import ThemeButton from '../ThemeButton';

const Header = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <>
      <h2 style={cTheme(theme, textColor)}>Expense tracker</h2>
      <ThemeButton/>
    </>
  );
};

export default Header;
