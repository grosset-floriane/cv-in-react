import React from 'react';

import {formatDate} from '../../../functions/formatDate';
import {Period, EntryItem, EntryTitle, EntrySubtitle, EntryDescription} from "./entryStyles";

function ContentEntry(props) {

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

    let title = "";
    if( props.title !== undefined && props.link !== "") {
        title = <a href={props.link} target="_blank" rel="noreferrer">{props.title}</a>;
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