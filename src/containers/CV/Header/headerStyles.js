import styled from 'styled-components';

const StyledCvHeader = styled.header`
display: flex;
flex-direction: column;

padding-bottom: 0;
max-width: 80rem;
margin-left: auto;
margin-right: auto;

@media (min-width: ${props => props.theme.mediaQueries.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 0;
    padding-top: ${props => props.theme.spacings.tablet};
    
}


`;

const CvHeadline = styled.span`
font-size: 1.5rem;
font-weight: 400;
display: block;
margin-top: 1rem;
color: ${props => props.theme.colors.headline};

&::before {
    content: '// ';
    
}
`;

const CvTitle = styled.h3`
width: 100%;
font-size: 3.5rem;
margin: 2rem 0 0;
color: ${props => props.theme.colors.title};

@media (min-width: ${props => props.theme.mediaQueries.tablet}) {
    font-size: 4rem;
    width: 42rem;
    margin-top: 0;
}

@media (min-width: ${props => props.theme.mediaQueries.desktop}) {
    
    width: 45rem;
}
`;

const UserData = styled.div`
width: 100%;
font-size: ${props => props.theme.fontSizes.smaller};
> div {
    display: flex;
    justify-content: space-between;
    line-height: ${props => props.theme.fontSizes.large};
}


@media (min-width: ${props => props.theme.mediaQueries.tablet}) {
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
color: ${props => props.theme.colors.address};
@media (min-width: ${props => props.theme.mediaQueries.tablet}) {
    
    width: auto;
}
`;

const Contact = styled.div`
width: calc(60% - .5rem);
`;

export {StyledCvHeader, CvHeadline, CvTitle, UserData, Address, Contact};
