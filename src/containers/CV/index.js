import React from 'react';

// Components
import Header from './Header/';
import Content from './Content/'
import ThemeSwitcher from "./ThemeSwitcher/";

// Styled elements
import Main from '../../styles/mainStyles.js';


function CV() {        
        return(
            <Main>
                <ThemeSwitcher />
                <Header />
                <Content />
            </Main>
        );    
}

export default CV;