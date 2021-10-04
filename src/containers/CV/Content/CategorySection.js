import React from 'react';
import ContentEntry from './Entry';
import CategoryTitle from '../../../styles/CategoryTitle';

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

    


    return(
        <section id={"section-" + props.id} className={props.location}>
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