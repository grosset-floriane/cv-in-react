import React from "react";
import styled from 'styled-components';

function Navigation() {
    const NavList = styled.ul`
        display: flex;

        a {
            color: black;
            font-family: ${props => props.theme.fontHeadings};
            font-weight: 700;
            color: ${props => props.theme.colorTitle};
            @media (min-width: ${props => props.theme.tablet}) {
                font-size : ${props => props.theme.fontSizeLarge};
            }

            padding: ${props => props.theme.spacingMobile};
            

            &:first-child {
                padding-left: 0;
            }
        }
    `;


    return(
        <nav>
            <NavList>
                <li><a href="http://www.florianegrosset.com/webdesign/?sub=about"><span>About</span></a></li>
                <li><a href="http://www.florianegrosset.com/webdesign/?sub=contact"><span>Contact</span></a></li>
            </NavList>
        </nav>
    );
}

export default Navigation;