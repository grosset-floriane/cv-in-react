import React from 'react';
import ContentEntry from './ContentEntry';
import styled from 'styled-components';

function CvContentSection(props) {
    const cvContentEntryComponents = props.categoryContent.map(entry => {
        return(
            <ContentEntry 
                title={entry.title} 
                subtitle={entry.subtitle} 
                description={entry.description}
                startDate={entry['start_date']}
                endDate={entry['end_date']}
                link={entry['link_to_post']}
                key={entry['content_id']}
            />
        );
    })

    const CategoryTitle = styled.h2`
        font-size: ${props => props.theme.fontSizeLarge};
        margin-top: 2em;
        margin-bottom: 1em;
    `;


    return(
        <section id={"section-" + props.id}>
            <CategoryTitle>
                {props.categoryData['category_name']}
            </CategoryTitle>
            <ul>
                {cvContentEntryComponents}
            </ul>
            
        </section>
    );
}

export default CvContentSection;