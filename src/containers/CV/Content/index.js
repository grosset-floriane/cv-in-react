import React, {useContext} from 'react';
import {cvContext} from "../../../context/cvContext";

import CategorySection from './CategorySection';

import {MainColumn, AsideColumn, WrapperContent} from "./columnsStyles";

function CvMain() {
    const {cvContent} = useContext(cvContext);
    
    function getComponent(category) {
        return(
            <CategorySection  
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


    


    return(
        <WrapperContent>
            <MainColumn>
                {mainComponents}
            </MainColumn>
            <AsideColumn>
                {asideComponents}
            </AsideColumn>
            
        </WrapperContent>
    );
}

export default CvMain;