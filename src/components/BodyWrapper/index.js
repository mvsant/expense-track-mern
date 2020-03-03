import React, { useContext } from "react";
import { container } from "./theme";
import { cTheme, textColor } from "../../context/GlobalTheme";

import { GlobalContext } from "../../context/GlobalState";

const BodyWrapper = (props) => {
  const { theme } = useContext(GlobalContext);

  const bg = document.body.style.background = theme === 'light' ? '#eee' : '#111' ;
/* style={( cTheme(theme, container))} */
  return (
    <div style={{bg}}>
        {props.children}
    </div>
  );
};

export default BodyWrapper;