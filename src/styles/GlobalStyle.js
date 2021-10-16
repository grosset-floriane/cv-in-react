import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        background-color: transparent;
        list-style: none;
    }
    body, html {
        margin: 0;
        font-family: ${props => props.theme.fonts.body};
        overflow-x: hidden;
        scroll-behavior: smooth;
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.fonts.headings};
    }

    /* Scrollbar styles */
    /* width */
    ::-webkit-scrollbar {
        width: 7px;
        height: 7px
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        
        background:   gray;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: black;
    }


    #section-4 li, #section-6 li {
        display: flex;
        align-items: flex-start;
    }

    #section-6 h3::after, #section-4 h3::after {
        content: ' ';
        display: inline-block;
        padding-right: 1rem;
    }

    #section-4 li p, #section-6 li p {
        margin: 0;
    }

    .aside h3 {
        font-weight: 600;
        font-size: 1.45rem;
    }

    .aside li {
        margin-bottom: 1.3rem;
    }
`;

export default GlobalStyle;