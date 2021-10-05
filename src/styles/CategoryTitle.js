import styled from 'styled-components';

const CategoryTitle = styled.h2`
        font-size: ${props => props.theme.fontSizes.large};
        margin-top: 2em;
        margin-bottom: 1em;
        text-transform: uppercase;
        color: ${props => props.theme.colors.categoryTitle};
    `;

export default CategoryTitle;