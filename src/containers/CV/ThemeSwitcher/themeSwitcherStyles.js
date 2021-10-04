import styled from 'styled-components';


const SwitchSection = styled.section`
        padding: ${props => props.theme.spacingMobile} 0;
        
        padding-top: 2.5rem;
    `;

    const SwitcherTitle = styled.h2`
        font-size: ${props => props.theme.fontSizeLarge};
        color: ${props => props.theme.colorTitle};
        margin-bottom: 1rem;
    `;

export {SwitchSection, SwitcherTitle};