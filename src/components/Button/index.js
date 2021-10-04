import React, {useContext} from "react";
import {cvContext} from "../../context/cvContext"; 

import ButtonSt from "../../styles/buttonStyles";

function Button(props) {
    const {theme, setTheme} = useContext(cvContext);
    const className = theme === props.theme && "active"; 

    

    return (
        <ButtonSt className={className} onClick={() => setTheme(props.theme)}>{props.text}</ButtonSt>
    )
}

export default Button;