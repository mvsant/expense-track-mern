import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './index.css';
import {themes} from '../../context/GlobalTheme';


 const Header = () => {
    const { theme } = useContext(GlobalContext);
    const { changeTheme } = useContext(GlobalContext);

    console.log("TEMA"+theme);
    function cTheme() {
        return theme === 'light' ? themes.light.background:themes.dark.background;
    }

    function handleTheme(){
        return theme === 'light' ? 'dark':'light';
    }
    return (
        <>
        <h2>
            Expense tracker
        </h2>
        <button style={{background:cTheme()}}>Theme son</button>
        <button onClick={() => changeTheme(handleTheme())}>Change theme</button>
        </>
    )
}

export default Header;