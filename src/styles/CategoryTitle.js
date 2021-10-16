import styled from 'styled-components';

const CategoryTitle = styled.h2`
        font-size: ${props => props.theme.name === "Paper Print" ? props.theme.fontSizes.small : props.theme.fontSizes.large};
        margin-top: ${props => props.theme.name === "Paper Print" ? "2rem" : "2em"};
        margin-bottom: ${props => props.theme.name === "Paper Print" ? "2rem" : "1em"};
        text-transform: ${props => props.theme.name === "Paper Print" ? "capitalize" : "uppercase"};
        border-bottom: ${props => props.theme.name === "Paper Print" ? `2px solid ${props.theme.colors.title}` : "none"};

        color: ${props => props.theme.colors.categoryTitle};
        font-family: ${props => props.theme.fonts.headings};
    `;

export default CategoryTitle;