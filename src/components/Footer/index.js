import React from 'react';

import FooterSt from "./footerStyles";
import Link from '../../styles/Links';

function Footer() {
    
    return(
        <FooterSt>
       
                <p>
                    This CV was made with React.js by Floriane Grosset <br /> 
                    <Link target="_BLANK" href="https://github.com/grosset-floriane/cv-in-react">
                        More information &amp; code on its GitHub page!
                    </Link> 
                </p>
        
            
        </FooterSt>
    );
}

export default Footer;