import React, {useContext} from 'react';
import {cvContext} from "../../../context/cvContext";

import Link from '../../../styles/Links';
import {StyledCvHeader, CvHeadline, CvTitle, UserData, Address, Contact} from "./headerStyles";
import CategoryTitle from '../../../styles/CategoryTitle';


function CvHeader(props) {
    const {userData, isLoading} = useContext(cvContext);

    
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
        <StyledCvHeader>
            {!isLoading ? 
            <>
                <CvTitle >
                    {userData.name}
                    <CvHeadline>{userData.tagline}</CvHeadline>
                </CvTitle>
                
                <UserData>
                    <CategoryTitle>Contact</CategoryTitle >
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
            </> : <CvTitle>Loading...</CvTitle>
        }
        </StyledCvHeader>
    );
}

export default CvHeader;