import React, {useContext} from "react";
import {cvContext} from "../context/cvContext"; 

function Button(props) {
    const {theme, setTheme} = useContext(cvContext);
    const className = theme === props.theme && "active" 
    return (
        <button className={className} onClick={() => setTheme(props.theme)}>{props.text}</button>
    )
}

export default Button;