import React from 'react';
import CvContentSection from './CvContentSection';
import styled from 'styled-components'

function CvMain(props) {
    const cvContentMainComponents = props.cvContent.map(category => {

        if(category[1] === "main") {
            return(
                <CvContentSection  
                        key={category[0]['category_id']} 
                        categoryData={category[0]} 
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
            return(
                <CvContentSection  
                        key={category[0]['category_id']} 
                        categoryData={category[0]} 
                        categoryContent={category[3]}
                    />
                    
            );
        } else {
            return(<></>);
        }
        
    })

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 5rem;
        padding-top: 0;
        max-width: 90rem;
        margin-left: auto;
        margin-right: auto;
    `;

    const MainColumn = styled.div`
        width: 50rem;
    `;

    const AsideColumn = styled.div`
        width: 25rem;
    `;


    return(
        <CvStructure>
            <MainColumn>
                {cvContentMainComponents}
            </MainColumn>
            <AsideColumn>
                {cvContentAsideComponents}
            </AsideColumn>
            
        </CvStructure>
    );
}

export default CvMain;