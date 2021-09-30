import React from "react";
import Button from "./Button";
import CodingLightTheme from "../components/styles/CodingLightTheme";
import CodingDarkTheme from "../components/styles/CodingDarkTheme";
import styled from 'styled-components';

function ThemeSwitcher() {
    const SwitchSection = styled.section`
        padding: ${props => props.theme.spacingMobile} 0;
        
        padding-top: 2.5rem;
    `;

    const SwitcherTitle = styled.h2`
        font-size: ${props => props.theme.fontSizeLarge};
        color: ${props => props.theme.colorTitle};
        margin-bottom: 1rem;
    `;

    return(
        <SwitchSection>
            <SwitcherTitle>Theme switcher:</SwitcherTitle>
            <Button text="Coding Light" theme={CodingLightTheme}/>
            <Button text="Coding Dark"  theme={CodingDarkTheme}/>
            <Button text="Plain"  />
            <Button text="Paper"  />
        </SwitchSection>
    );
}

export default ThemeSwitcher;