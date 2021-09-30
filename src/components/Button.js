import React, {useContext} from "react";
import {cvContext} from "../context/cvContext"; 
import styled from 'styled-components';

function Button(props) {
    const {theme, setTheme} = useContext(cvContext);
    const className = theme === props.theme && "active"; 

    const Button = styled.button`
        padding: .7rem;
        border: 1px #555 solid;
        border-radius: 5px;
        margin: .2rem .5rem 0 0;
        cursor: pointer;
        background-color: white;

        &.active {
            background-color: #555;
            color: white;
        }
    `;

    return (
        <Button className={className} onClick={() => setTheme(props.theme)}>{props.text}</Button>
    )
}

export default Button;