import React from 'react';
import styled from 'styled-components';
import Link from '../styles/Links';

function CvHeader(props) {
    const CvHeader = styled.div`
        display: flex;
        flex-direction: column;
        
        padding: ${props => props.theme.spacingMobile};
        padding-bottom: 0;
        max-width: 90rem;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: ${props => props.theme.tablet}) {
            flex-direction: row;
            justify-content: space-between;
            padding: ${props => props.theme.spacingTablet};
        }

        
    `;

    const CvHeadline = styled.span`
        font-size: 1.5rem;
        font-weight: 400;
        display: block;
        margin-top: 1rem;
        color: ${props => props.theme.colorHeadline};

        &::before {
            content: '// ';
            
        }
    `;

    const CvTitle = styled.h3`
        width: 100%;
        font-size: 3.5rem;
        margin: 2rem 0;
        color: ${props => props.theme.colorTitle};

        @media (min-width: ${props => props.theme.tablet}) {
            font-size: 4rem;
        }
    `;

    const UserData = styled.div`
        width: 100%;
        font-size: 1.3rem;
        margin-top: .5rem;
        display: flex;
        justify-content: space-between;
    `;

    const Address = styled.p`
        width: calc(50% - .5rem);
    `;

    const Contact = styled.div`
        width: calc(50% - .5rem);
    `;

    const userAddress = props.userData.address;
    let addressArray = [];
    if(userAddress !== undefined) {
        addressArray = userAddress.split(',');    
    }
    

    return(
        <CvHeader>
            <CvTitle >
                {props.userData.name}
                <CvHeadline>{props.userData.tagline}</CvHeadline>
            </CvTitle>
            <UserData>
                <Address>
                    {addressArray[0]}<br />
                    {addressArray[1]}<br />
                    {addressArray[2]}
                </Address>

                <Contact>
                    <p><Link href="tel:">{props.userData["phone_number"]}</Link></p>

                    {/* How to mix strings and JS script here */}
                    <p><Link href="mailto:">{props.userData.email}</Link></p>
                    <p>
                        <Link href={props.userData.website}>
                            https://{props.userData.website}</Link>
                    </p>
                </Contact>

                
            </UserData>
        </CvHeader>
    );
}

export default CvHeader;