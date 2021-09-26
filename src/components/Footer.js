import React from 'react';
import styled from 'styled-components';
import Link from './styles/Links';

function Footer() {
    const Footer = styled.footer`
        padding: ${props => props.theme.spacingMobile};
        font-size: ${props => props.theme.fontSizeSmallest};
        max-width: 100%;
        margin: 0;
        line-height: ${props => props.theme.fontSizeSmall};
        background-color: ${props => props.theme.backgroundColor};

        

        @media (min-width: ${props => props.theme.tablet}) {
            padding: 0;

            p {
                max-width: 80rem;
                margin: auto;
                padding: ${props => props.theme.spacingTablet};
            }
            
        }

    `;
    return(
        <Footer>
       
                <p>
                    This CV was made with React.js by Floriane Grosset <br /> 
                    <Link target="_BLANK" href="https://github.com/grosset-floriane/cv-in-react">
                        More information &amp; code on its GitHub page!
                    </Link> 
                </p>
        
            
        </Footer>
    );
}

export default Footer;