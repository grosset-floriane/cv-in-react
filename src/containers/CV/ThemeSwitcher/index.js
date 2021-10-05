import React, {useContext} from "react";
import {cvContext} from "../../../context/cvContext"; 
import codingLightTheme from "../../../styles/themes/codingLightTheme";
import codingDarkTheme from "../../../styles/themes/codingDarkTheme";
import paperPrintTheme from "../../../styles/themes/paperPrintTheme";
import plainTheme from "../../../styles/themes/plainTheme";
import {SwitchSection, SwitcherTitle} from "./themeSwitcherStyles";

import Button from "../../../styles/Button"


function ThemeSwitcher() {
    const {theme, setTheme} = useContext(cvContext);
    const activeClass = "active"; 
    

    return(
        <SwitchSection>
            <SwitcherTitle>Theme switcher:</SwitcherTitle>
            

            <Button 
                className={theme === codingLightTheme && activeClass} 
                onClick={() => 
                    setTheme(codingLightTheme)}>
                        Coding Light
            </Button>

            <Button 
                className={theme === codingDarkTheme && activeClass} 
                onClick={() => 
                    setTheme(codingDarkTheme)}>
                        Coding Dark
            </Button>

            <Button 
                className={theme === plainTheme && activeClass} 
                onClick={() => {}}>
                        Plain
            </Button>

            <Button 
                className={theme === paperPrintTheme && activeClass} 
                onClick={() => {}}>
                        Paper
            </Button>
        </SwitchSection>
    );
}

export default ThemeSwitcher;