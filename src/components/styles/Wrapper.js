import styled from 'styled-components';

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding-top: 0;
        max-width: 80rem;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: ${props => props.theme.tablet}) {
            flex-direction: row;
            justify-content: space-between;
        }
    `;

export default Wrapper;