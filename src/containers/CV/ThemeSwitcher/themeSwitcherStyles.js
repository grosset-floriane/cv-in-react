import styled from 'styled-components';


const SwitchSection = styled.section`
        padding: ${props => props.theme.spacings.mobile} 0;
        
        padding-top: 2.5rem;
    `;

    const SwitcherTitle = styled.h2`
        font-size: ${props => props.theme.fontSizes.large};
        color: ${props => props.theme.colors.title};
        margin-bottom: 1rem;
    `;

export {SwitchSection, SwitcherTitle};