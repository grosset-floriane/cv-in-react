import React, {useContext} from "react";
import {cvContext} from "../../../context/cvContext"; 
import CodingLightTheme from "../../../styles/themes/CodingLightTheme";
import CodingDarkTheme from "../../../styles/themes/CodingDarkTheme";
import PaperPrintTheme from "../../../styles/themes/PaperPrintTheme";
import PlainTheme from "../../../styles/themes/PlainTheme";
import {SwitchSection, SwitcherTitle} from "./themeSwitcherStyles";

import Button from "../../../styles/Button"


function ThemeSwitcher() {
    const {theme, setTheme} = useContext(cvContext);
    const activeClass = "active"; 
    

    return(
        <SwitchSection>
            <SwitcherTitle>Theme switcher:</SwitcherTitle>
            

            <Button 
                className={theme === CodingLightTheme && activeClass} 
                onClick={() => 
                    setTheme(CodingLightTheme)}>
                        Coding Light
            </Button>

            <Button 
                className={theme === CodingDarkTheme && activeClass} 
                onClick={() => 
                    setTheme(CodingDarkTheme)}>
                        Coding Dark
            </Button>

            <Button 
                className={theme === PlainTheme && activeClass} 
                onClick={() => {}}>
                        Plain
            </Button>

            <Button 
                className={theme === PaperPrintTheme && activeClass} 
                onClick={() => {}}>
                        Paper
            </Button>
        </SwitchSection>
    );
}

export default ThemeSwitcher;