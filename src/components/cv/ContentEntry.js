import React from 'react';
import styled from 'styled-components';

function ContentEntry(props) {
    let dateLine = "";
    if(props.startDate !== "0000-00-00") {
        if(props.endDate !== "0000-00-00") {
            dateLine = <p>From {props.startDate} to {props.endDate}</p>;
        } else {
            dateLine = <p>From {props.startDate} until today</p>;
        }
    }

    const EntryTitle = styled.h3`
        font-size: 1.8rem;
    `;

    const EntrySubtitle = styled.span`
        font-size: 1.5rem;
        display: block;
        font-weight: 400;

        &::after{
            content: ']';
        }

        &::before{
            content: '[';
        }
    `;

    const EntryDescription = styled.p`
        font-size: 1.3rem;
    `;

    return (
        <li>
            <EntryTitle>{props.title} 
                {props.subtitle && <EntrySubtitle>{props.subtitle}</EntrySubtitle>} 
            </EntryTitle>
            {dateLine}
            {props.description && <EntryDescription> {props.description} </EntryDescription>}



        </li>
        
    );
}

export default ContentEntry;