import React from 'react';
import styled from 'styled-components';
import CodingLightTheme from "./components/styles/CodingLightTheme";

function StyleNav () {
    function handleStyleSelection(selectedStyle) {
        const currentTheme = selectedStyle;
    }
    return(
        <nav>
            <ul>
                <li><button onClick={() => handleStyleSelection(CodingLightTheme)}>Light Code Theme</button></li>
                <li><button>Dark Code Theme</button></li>
                <li><button>Paper Theme</button></li>
            </ul>
        </nav>
    );
}

export default StyleNav;