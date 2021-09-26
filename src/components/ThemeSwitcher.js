import React from "react";
import Button from "./Button";
import CodingLightTheme from "../components/styles/CodingLightTheme";
import CodingDarkTheme from "../components/styles/CodingDarkTheme";


function ThemeSwitcher() {
    return(
        <div>
            <h2>Theme switch</h2>
            <Button text="Coding Light" theme={CodingLightTheme}/>
            <Button text="Coding Dark"  theme={CodingDarkTheme}/>
            <Button text="Plain"  />
            <Button text="Paper"  />
        </div>
    );
}

export default ThemeSwitcher;