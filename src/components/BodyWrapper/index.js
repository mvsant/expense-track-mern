import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

const BodyWrapper = props => {
  const { theme } = useContext(GlobalContext);

  const bg = (document.body.style.background =
    theme === "light" ? "#eee" : "#111");
  return <div style={{ bg }}>{props.children}</div>;
};

export default BodyWrapper;
