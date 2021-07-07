import React from 'react';
import styled from 'styled-components';

function ContentEntry(props) {

    const Period = styled.p`
        font-size: ${props => props.theme.fontSizeSmallest};
        text-transform: uppercase;
        margin: .5em 0;
        color: ${props => props.theme.colorEntryDates};
    `;
    let dateLine = "";
    if(props.startDate !== "0000-00-00") {
        if(props.endDate !== "0000-00-00") {
            dateLine = <Period>From {props.startDate} to {props.endDate}</Period>;
        } else {
            dateLine = <Period>From {props.startDate} until today</Period>;
        }
    }

    const EntryTitle = styled.h3`
        font-size: 1.6rem;
        color: ${props => props.theme.colorEntryTitle};

        a {
            color: inherit;
        }
    `;

    const EntrySubtitle = styled.span`
        font-size: 1.5rem;
        display: block;
        font-weight: 400;
        color: ${props => props.theme.colorEntrySubtitle};
        margin: .4em 0;

        &::after{
            content: ']';
            color: ${props => props.theme.colorBrackets};

        }

        &::before{
            content: '[';
            color: ${props => props.theme.colorBrackets};

        }
    `;

    const EntryDescription = styled.p`
        font-size: 1.3rem;
        color: ${props => props.theme.colorDescription};
        margin: .5em 0;

    `;

    let title = "";
    if( props.title !== undefined && props.link !== "") {
        title = <a href={props.link}>{props.title}</a>;
    } else if (props.title !== undefined) {
        title = props.title;
    }
    console.log(props.link);

    return (
        <li>
            <EntryTitle>{title} 
                {props.subtitle && <EntrySubtitle>{props.subtitle}</EntrySubtitle>} 
            </EntryTitle>
            {dateLine}
            {props.description && <EntryDescription> {props.description} </EntryDescription>}



        </li>
        
    );
}

export default ContentEntry;