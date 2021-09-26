import React, {useContext} from 'react';
import styled from 'styled-components';
import Link from '../styles/Links';
import CategoryTitle from '../styles/CategoryTitle';
import {cvContext} from "../../context/cvContext";

function CvHeader(props) {
    const {userData} = useContext(cvContext);

    const CvHeader = styled.div`
        display: flex;
        flex-direction: column;
        
        padding: ${props => props.theme.spacingMobile};
        padding-bottom: 0;
        max-width: 80rem;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: ${props => props.theme.tablet}) {
            flex-direction: row;
            justify-content: space-between;
            padding: ${props => props.theme.spacingTablet};
            padding-bottom: 0;
            
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
        margin: 2rem 0 0;
        color: ${props => props.theme.colorTitle};

        @media (min-width: ${props => props.theme.tablet}) {
            font-size: 4rem;
            width: 42rem;
            margin-top: 0;
        }

        @media (min-width: ${props => props.theme.desktop}) {
            
            width: 45rem;
        }
    `;

    const UserData = styled.div`
        width: 100%;
        font-size: ${props => props.theme.fontSizeSmaller};
        > div {
            display: flex;
            justify-content: space-between;
            line-height: ${props => props.theme.fontSizeLarge};
        }
        

        @media (min-width: ${props => props.theme.tablet}) {
            width: 25rem;
            > div {
                flex-direction: column;
                margin-top: 0.5rem;
                line-height: initial;
            }
            h2 {
                margin-top: 0.5rem;
                display: none;
            }
        }
    `;

    const Address = styled.p`
        width: calc(40% - .5rem);
        color: ${props => props.theme.colorAddress};
        @media (min-width: ${props => props.theme.tablet}) {
            
            width: auto;
        }
    `;

    const Contact = styled.div`
        width: calc(60% - .5rem);
    `;

    const userAddress = userData.address;
    let addressArray = [];
    if(userAddress !== undefined) {
        addressArray = userAddress.split(',');    
    }

    const userPhone = userData["phone_number"];
    let userPhoneLink = "";
    if(userPhone !== undefined) {
        userPhoneLink = userPhone.replace(/ /g,'');    
    }
    

    return(
        <CvHeader>
            <CvTitle >
                {userData.name}
                <CvHeadline>{userData.tagline}</CvHeadline>
            </CvTitle>
            
            <UserData>
                <CategoryTitle>CONTACT</CategoryTitle >
                <div>
                    <Address>
                        {addressArray[0]},<br />
                        {addressArray[1]},<br />
                        {addressArray[2]}
                    </Address>

                    <Contact>
                        <p><Link href={`tel:${userPhoneLink}`}>{userData["phone_number"]}</Link></p>

                        {/* How to mix strings and JS script here */}
                        <p><Link href={`mailto:${userData.email }`} >{userData.email}</Link></p>
                        <p>
                            <Link href={`https://${userData.website}`}>
                                https://{userData.website}</Link>
                        </p>
                    </Contact>
                </div>
                

                
            </UserData>
        </CvHeader>
    );
}

export default CvHeader;