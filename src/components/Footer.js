import React from 'react';
import styled from 'styled-components';

function Footer() {
    const Footer = styled.footer`
        padding: ${props => props.theme.spacingMobile};
        font-size: ${props => props.theme.fontSizeSmallest};
    `;
    return(
        <Footer>
            <p>This CV was made with React.js by Floriane Grosset</p>
        </Footer>
    );
}

export default Footer;