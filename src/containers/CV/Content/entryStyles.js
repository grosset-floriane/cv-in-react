import styled from 'styled-components';

const Period = styled.p`
    font-size: ${props => props.theme.fontSizes.smallest};
    text-transform: uppercase;
    margin: .5em 0;
    color: ${props => props.theme.colors.entryDates};
`;

const EntryItem = styled.li`
        margin-bottom: 2rem;
    `;

    const EntryTitle = styled.h3`
        font-size: ${props => props.theme.fontSizes.large};
        color: ${props => props.theme.colors.entryTitle};

        a {
            color: inherit;
        }
    `;

    const EntrySubtitle = styled.span`
        font-size: ${props => props.theme.fontSizes.smaller};
        display: block;
        font-weight: 400;
        color: ${props => props.theme.colors.entrySubtitle};
        margin: .4em 0;

        &::after{
            content: ']';
            color: ${props => props.theme.colors.brackets};

        }

        &::before{
            content: '[';
            color: ${props => props.theme.colors.brackets};

        }
    `;

    const EntryDescription = styled.p`
        font-size: ${props => props.theme.fontSizes.smaller};
        color: ${props => props.theme.colors.description};
        margin: .5em 0;

    `;

export {Period, EntryItem, EntryTitle, EntrySubtitle, EntryDescription};