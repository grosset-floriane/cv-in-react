import styled from 'styled-components';

const StyledFooter = styled.footer`
        padding: ${props => props.theme.spacingMobile};
        font-size: ${props => props.theme.fontSizeSmallest};
        max-width: 100%;
        margin: 0;
        line-height: ${props => props.theme.fontSizeSmall};
        color: ${props => props.theme.colorTitle};
        

        @media (min-width: ${props => props.theme.tablet}) {
            padding: 0;

            p {
                max-width: 80rem;
                margin: auto;
                padding: ${props => props.theme.spacingTablet};
                
            }
            
        }

    `;

export default StyledFooter;