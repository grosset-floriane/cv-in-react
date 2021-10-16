import styled from 'styled-components';

const WrapperContent = styled.div`
    display: flex;
    flex-direction: ${props => props.theme.name === "Paper Print" ? "column-reverse" : "column"};
    padding-top: 0;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${props => props.theme.mediaQueries.tablet}) {
        flex-direction: ${props => props.theme.name === "Paper Print" ? "column-reverse" : "row"} ;
        justify-content: space-between;
    }
`;

const MainColumn = styled.div`
    width: 100%;

    @media (min-width: ${props => props.theme.mediaQueries.tablet}) {
        width: ${props => props.theme.name === "Paper Print" ? "100%" : "42rem"} ;
    }

    @media (min-width: ${props => props.theme.mediaQueries.desktop}) {
        width: ${props => props.theme.name === "Paper Print" ? "100%" : "45rem"} ;
    }

`;

const AsideColumn = styled.div`
    width: 100%;

    @media (min-width: ${props => props.theme.mediaQueries.tablet}) {
        width: ${props => props.theme.name === "Paper Print" ? "100%" : "25rem"} ;
    }
`;

export {MainColumn, AsideColumn, WrapperContent}; 