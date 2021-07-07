import React from 'react';
import CvContentSection from './CvContentSection';
import styled from 'styled-components';
import Wrapper from '../styles/Wrapper';

function CvMain(props) {
    const cvContentMainComponents = props.cvContent.map(category => {

        if(category[1] === "main") {
            return(
                <CvContentSection  
                        key={category[0]['category_id']} 
                        categoryData={category[0]} 
                        id={category[0]['category_id']}
                        categoryContent={category[3]}
                    />
                    
            );
        } else {
            return(<></>);
        }
        
    })

    const cvContentAsideComponents = props.cvContent.map(category => {
console.log(category[3]);
        if(category[1] === "aside") {
            console.log(category[0]['category_id']);
            return(
                <CvContentSection  
                        key={category[0]['category_id']} 
                        id={category[0]['category_id']}
                        categoryData={category[0]} 
                        categoryContent={category[3]}
                    />
                    
            );


        } else {
            return(<></>);
        }
        
    })

    

    const MainColumn = styled.div`
        width: 100%;
        @media (min-width: ${props => props.theme.tablet}) {
            width: 50rem;
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