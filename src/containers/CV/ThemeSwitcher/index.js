import React, {useContext} from "react";
import {cvContext} from "../../../context/cvContext"; 
import codingLightTheme from "../../../styles/themes/codingLightTheme";
import codingDarkTheme from "../../../styles/themes/codingDarkTheme";
import plainTheme from "../../../styles/themes/plainTheme";
import paperPrintTheme from "../../../styles/themes/paperPrintTheme";

import {SwitchSection, SwitcherTitle} from "./themeSwitcherStyles";

import Button from "../../../styles/Button"


function ThemeSwitcher() {
    const {theme, setTheme} = useContext(cvContext);
    const activeClass = "active"; 

    return(
        <SwitchSection>
            <SwitcherTitle>Theme switcher:</SwitcherTitle>
            

            <Button 
                className={theme.name === "Coding Light" && activeClass} 
                onClick={() => setTheme(codingLightTheme)}
            >
                Coding Light
            </Button>

            <Button 
                className={theme.name === "Coding Dark" && activeClass} 
                onClick={() => setTheme(codingDarkTheme)}
            >
                Coding Dark
            </Button>

            <Button 
                className={theme.name === "Plain" && activeClass} 
                onClick={() => setTheme(plainTheme)}
            >
                Plain
            </Button>

            <Button 
                className={theme.name === "Paper Print" && activeClass} 
                onClick={() => setTheme(paperPrintTheme)}
            >
                Paper Print
            </Button>
        </SwitchSection>
    );
}

export default ThemeSwitcher;