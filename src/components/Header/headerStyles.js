import styled from 'styled-components';

const SiteHeader = styled.header`
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${props => props.theme.backgroundColor};
        border-bottom: 1px solid ${props => props.theme.colorTitle};

        a {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    `; 

    const SiteTitle = styled.h1`
        width: max-content;
        font-size: 1.8rem;
        width: 55%;
        margin: ${props => props.theme.spacingMobile} 0;
        @media (min-width: ${props => props.theme.tablet}) {
            font-size: 2.5rem;
            width: auto;
            
        }
        
        

        img {
            width: 56px;
            padding: 0 ${props => props.theme.spacingMobile};
            margin: 0;
            position: relative;
            top: -1px;
        }

        a{ 
            color: ${props => props.theme.colorTitle};
            display: flex;
            align-items: center;
            
            
        }
    `;

export {SiteHeader, SiteTitle};