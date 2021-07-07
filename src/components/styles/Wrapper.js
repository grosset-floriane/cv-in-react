import styled from 'styled-components';

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: ${props => props.theme.spacingMobile};
        padding-top: 0;
        max-width: 90rem;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: ${props => props.theme.tablet}) {
            flex-direction: row;
            justify-content: space-between;
            padding: ${props => props.theme.spacingTablet};
        }
    `;

export default Wrapper;