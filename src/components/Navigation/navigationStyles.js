import styled from 'styled-components';

const NavList = styled.ul`
        display: flex;

        a {
            color: black;
            font-family: ${props => props.theme.fonts.headings};
            font-weight: 700;
            color: ${props => props.theme.colors.title};
            @media (min-width: ${props => props.theme.mediaQueries.tablet}) {
                font-size : ${props => props.theme.fontSizes.large};
            }

            padding: ${props => props.theme.spacings.mobile};
            

            &:first-child {
                padding-left: 0;
            }
        }
    `;

export default NavList;