import React from 'react';

import StyledFooter from "./footerStyles";
import Link from '../../styles/Links';

function Footer() {
    
    return(
        <StyledFooter>
       
                <p>
                    This CV was made with React.js by Floriane Grosset <br /> 
                    <Link target="_BLANK" href="https://github.com/grosset-floriane/cv-in-react">
                        More information &amp; code on its GitHub page!
                    </Link> 
                </p>
        
            
        </StyledFooter>
    );
}

export default Footer;