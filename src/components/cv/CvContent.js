import React from 'react';
import CvContentSection from './CvContentSection';
import styled from 'styled-components';
import Wrapper from '../styles/Wrapper';

function CvMain(props) {
    const cvContentMainComponents = props.cvContent.map(category => {
            return( category[1] === "main" && 
                        <CvContentSection  
                            key={category[0]['category_id']} 
                            categoryData={category[0]} 
                            id={category[0]['category_id']}
                            categoryContent={category[3]}
                            location="main"
                        /> 
            );
        
        
    })

    const cvContentAsideComponents = props.cvContent.map(category => {
            return(category[1] === "aside" &&
                        <CvContentSection  
                                key={category[0]['category_id']} 
                                id={category[0]['category_id']}
                                categoryData={category[0]} 
                                categoryContent={category[3]}
                                location="aside"
                            />
                    
            );
    })

    

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
                {cvContentMainComponents}
            </MainColumn>
            <AsideColumn>
                {cvContentAsideComponents}
            </AsideColumn>
            
        </Wrapper>
    );
}

export default CvMain;