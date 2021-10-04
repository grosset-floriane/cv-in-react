import styled from 'styled-components';

const NavList = styled.ul`
        display: flex;

        a {
            color: black;
            font-family: ${props => props.theme.fontHeadings};
            font-weight: 700;
            color: ${props => props.theme.colorTitle};
            @media (min-width: ${props => props.theme.tablet}) {
                font-size : ${props => props.theme.fontSizeLarge};
            }

            padding: ${props => props.theme.spacingMobile};
            

            &:first-child {
                padding-left: 0;
            }
        }
    `;

export default NavList;