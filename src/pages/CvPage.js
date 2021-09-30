import React from 'react';
import CvHeader from '../components/cv/CvHeader';
import CvContent from '../components/cv/CvContent'
import styled from 'styled-components';
import ThemeSwitcher from "../components/ThemeSwitcher";

const Main = styled.main`
            padding-top: ${props => props.theme.heightHeader} ; 
            padding-bottom: calc(${props => props.theme.heightHeader} / 2); 
            padding-right: ${props => props.theme.spacingMobile};
            padding-left: ${props => props.theme.spacingMobile};
            background-color: ${props => props.theme.backgroundColor};
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;

            @media (min-width: ${props => props.theme.tablet}) {
            padding-top: calc(${props => props.theme.heightHeader} * 1.5);
            padding-bottom: ${props => props.theme.heightHeader} ; 
            padding-right: ${props => props.theme.spacingTablet};
            padding-left: ${props => props.theme.spacingTablet};
        }
    `;

function CvPage() {        
        return(
            <Main>
                <ThemeSwitcher />
                <CvHeader />
                <CvContent />
            </Main>
        );    
}

export default CvPage;