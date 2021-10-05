import styled from 'styled-components';

const StyledFooter = styled.footer`
        padding: ${props => props.theme.spacings.mobile};
        font-size: ${props => props.theme.fontSizes.smallest};
        max-width: 100%;
        margin: 0;
        line-height: ${props => props.theme.fontSizes.small};
        color: ${props => props.theme.colors.title};
        

        @media (min-width: ${props => props.theme.mediaQueries.tablet}) {
            padding: 0;

            p {
                max-width: 80rem;
                margin: auto;
                padding: ${props => props.theme.spacings.tablet};
                
            }
            
        }

    `;

export default StyledFooter;