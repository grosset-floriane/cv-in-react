import styled from 'styled-components';

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding-top: 0;
        max-width: 80rem;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: ${props => props.theme.mediaQueries.tablet}) {
            flex-direction: row;
            justify-content: space-between;
        }
    `;

const MainColumn = styled.div`
width: 100%;
@media (min-width: ${props => props.theme.mediaQueries.tablet}) {
    width: 42rem;
}

@media (min-width: ${props => props.theme.mediaQueries.desktop}) {
    width: 45rem;
}

`;

const AsideColumn = styled.div`
width: 100%;
@media (min-width: ${props => props.theme.mediaQueries.tablet}) {
    width: 25rem;
}
`;

export {MainColumn, AsideColumn, Wrapper}; 