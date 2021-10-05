import styled from 'styled-components';

const  Main = styled.main`
            padding-top: ${props => props.theme.heights.header} ; 
            padding-bottom: calc(${props => props.theme.heights.header} / 2); 
            padding-right: ${props => props.theme.spacings.mobile};
            padding-left: ${props => props.theme.spacings.mobile};
            background-color: ${props => props.theme.background.color};
            max-width: 80rem;
            margin-left: auto;
            margin-right: auto;

            @media (min-width: ${props => props.theme.mediaQueries.tablet}) {
            padding-top: calc(${props => props.theme.heights.header} * 1.5);
            padding-bottom: ${props => props.theme.heights.header} ; 
            padding-right: ${props => props.theme.spacings.tablet};
            padding-left: ${props => props.theme.spacings.tablet};
        }
    `;

export default Main;