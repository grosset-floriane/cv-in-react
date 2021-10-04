import React from "react";

import NavList from "./navigationStyles";

function Navigation() {
    
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