import styled from 'styled-components';

const Period = styled.p`
    font-size: ${props => props.theme.fontSizeSmallest};
    text-transform: uppercase;
    margin: .5em 0;
    color: ${props => props.theme.colorEntryDates};
`;

const EntryItem = styled.li`
        margin-bottom: 2rem;
    `;

    const EntryTitle = styled.h3`
        font-size: ${props => props.theme.fontSizeLarge};
        color: ${props => props.theme.colorEntryTitle};

        a {
            color: inherit;
        }
    `;

    const EntrySubtitle = styled.span`
        font-size: ${props => props.theme.fontSizeSmaller};
        display: block;
        font-weight: 400;
        color: ${props => props.theme.colorEntrySubtitle};
        margin: .4em 0;

        &::after{
            content: ']';
            color: ${props => props.theme.colorBrackets};

        }

        &::before{
            content: '[';
            color: ${props => props.theme.colorBrackets};

        }
    `;

    const EntryDescription = styled.p`
        font-size: ${props => props.theme.fontSizeSmaller};
        color: ${props => props.theme.colorDescription};
        margin: .5em 0;

    `;

export {Period, EntryItem, EntryTitle, EntrySubtitle, EntryDescription};