import React, {useContext} from 'react';
import {cvContext} from "../../context/cvContext";

import Navigation from "../Navigation/";

import CodingDarkTheme from "../../styles/themes/CodingDarkTheme";
import logoWhite from "../../assets/images/logo-white.png";
import logoBlack from "../../assets/images/logo.png";

import {SiteHeader, SiteTitle} from "./headerStyles";

function Header() {
    const {theme} = useContext(cvContext);

    const logo = theme === CodingDarkTheme ? logoWhite : logoBlack;

    

    return(
        <SiteHeader>
            
                <SiteTitle>
                    <a href="https://www.florianegrosset.com/webdesign/">
                        <img src={logo} alt="Logo" />
                        Flo's Webdesign
                    </a>
                </SiteTitle>
            
            <Navigation />
        </SiteHeader>
    );
}

export default Header;