import React from 'react';
import styled from 'styled-components';

function CvHearder(props) {
    const CvHeader = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 5rem;
        padding-bottom: 0;
        max-width: 90rem;
        margin-left: auto;
        margin-right: auto;

        
    `;

    const CvHeadline = styled.span`
        font-size: 1.5rem;
        font-weight: 400;
        display: block;

        &::before {
            content: '// ';
            
        }
    `;

    const CvTitle = styled.h3`
        width: 50rem;
        font-size: 4rem;
    `;

    const UserData = styled.div`
        width: 25rem;
        font-size: 1.3rem;
        margin-top: .5rem;
    `;
    return(
        <CvHeader>
            <CvTitle >
                {props.userData.name}
                <CvHeadline>{props.userData.tagline}</CvHeadline>
            </CvTitle>
            <UserData>
                <p>{props.userData.address}</p>

                <p>{props.userData["phone_number"]}</p>

                {/* How to mix strings and JS script here */}
                <p><a href="mailto:">{props.userData.email}</a></p>
                <p>
                    <a href={props.userData.website}>
                        https://{props.userData.website}</a>
                </p>
            </UserData>
        </CvHeader>
    );
}

export default CvHearder;