import React from 'react';
import styled from 'styled-components';
import {formatDate} from '../../functions/formatDate';


function ContentEntry(props) {

    const Period = styled.p`
        font-size: ${props => props.theme.fontSizeSmallest};
        text-transform: uppercase;
        margin: .5em 0;
        color: ${props => props.theme.colorEntryDates};
    `;

    let dateLine = "";
    if(props.startDate !== "0000-00-00") {
        const startDate = formatDate(props.startDate);
        if(props.endDate !== "0000-00-00") {
            const endDate = formatDate(props.endDate);
            dateLine = <Period>From {startDate} to {endDate}</Period>;
        } else {
            dateLine = <Period>From {startDate} until today</Period>;
        }
    }

    const EntryItem = styled.li`
        margin-bottom: 2rem;
    `;

    const EntryTitle = styled.h3`
        font-size: ${props => props.theme.fontSizeLarge};
        color: ${props => props.theme.colorEntryTitle};

        a {
            color: inherit;
        }
    `;

    const EntrySubtitle = styled.span`
        font-size: ${props => props.theme.fontSizeSmaller};
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
        font-size: ${props => props.theme.fontSizeSmaller};
        color: ${props => props.theme.colorDescription};
        margin: .5em 0;

    `;

    let title = "";
    if( props.title !== undefined && props.link !== "") {
        title = <a href={props.link}>{props.title}</a>;
    } else if (props.title !== undefined) {
        title = props.title;
    }

    return (
        <EntryItem>
            <EntryTitle>{title} 
                {props.subtitle && <EntrySubtitle>{props.subtitle}</EntrySubtitle>} 
            </EntryTitle>
            {dateLine}
            {props.description && <EntryDescription> {props.description} </EntryDescription>}
        </EntryItem>
        
    );
}

export default ContentEntry;