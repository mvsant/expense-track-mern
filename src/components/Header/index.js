import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { cTheme, textColor } from "../../context/GlobalTheme";
import {divStyle, div} from './theme';
import ThemeButton from '../ThemeButton';

const Header = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div style={divStyle}>
      <h2 style={cTheme(theme, textColor)}>Expense tracker</h2>
      <div style={div}>
        <ThemeButton/>
        </div>
    </div>
  );
};

export default Header;
