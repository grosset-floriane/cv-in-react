import React from 'react';
import styled from 'styled-components';



function Header() {

    const SiteHeader = styled.header`
        position: fixed;
        background-color: ${props => props.theme.backgroundColor};
        width: 100%;
        padding: ${props => props.theme.spacingMobile};
    `; 

    return(
        <SiteHeader>
            <h1>Flo's design</h1>
        </SiteHeader>
    );
}

export default Header;