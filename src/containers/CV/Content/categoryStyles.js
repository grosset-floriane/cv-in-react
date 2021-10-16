import styled from 'styled-components';

const StyledCategorySection = styled.section`
    margin-top: ${props => props.theme.name === "Paper Print" ? "3rem" : "0"};
`;

export default StyledCategorySection;