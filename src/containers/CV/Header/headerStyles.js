import styled from 'styled-components';

const CvHeaderStyle = styled.header`
display: flex;
flex-direction: column;

padding-bottom: 0;
max-width: 80rem;
margin-left: auto;
margin-right: auto;

@media (min-width: ${props => props.theme.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 0;
    padding-top: ${props => props.theme.spacingTablet};
    
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

export {CvHeaderStyle, CvHeadline, CvTitle, UserData, Address, Contact};
