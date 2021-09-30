import React, {useContext} from 'react';
import CvContentSection from './CvContentSection';
import styled from 'styled-components';
import Wrapper from '../styles/Wrapper';
import {cvContext} from "../../context/cvContext";

function CvMain() {
    const {cvContent} = useContext(cvContext);
    
    function getComponent(category) {
        return(
            <CvContentSection  
                key={category[0]['category_id']} 
                id={category[0]['category_id']}
                categoryData={category[0]} 
                categoryContent={category[3]}
                location={category[1]}
            />
        );
    }

    const arrayMainCategories = cvContent.filter(category => category[1] === "main"); 
    const mainComponents = arrayMainCategories.map(category => getComponent(category));

    const arrayAsideCategories = cvContent.filter(category => category[1] === "aside"); 
    const asideComponents = arrayAsideCategories.map(category => getComponent(category));

    console.log(asideComponents )
    const MainColumn = styled.div`
        width: 100%;
        @media (min-width: ${props => props.theme.tablet}) {
            width: 42rem;
        }

        @media (min-width: ${props => props.theme.desktop}) {
            width: 45rem;
        }
        
    `;

    const AsideColumn = styled.div`
        width: 100%;
        @media (min-width: ${props => props.theme.tablet}) {
            width: 25rem;
        }
    `;


    return(
        <Wrapper>
            <MainColumn>
                {mainComponents}
            </MainColumn>
            <AsideColumn>
                {asideComponents}
            </AsideColumn>
            
        </Wrapper>
    );
}

export default CvMain;