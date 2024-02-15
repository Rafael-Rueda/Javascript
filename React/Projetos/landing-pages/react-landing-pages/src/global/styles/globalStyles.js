import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-size: 2.4rem;
        font-family: ${(props) => props.theme.fonts.body};
        background-color: ${(props) => props.theme.colors.primary};
    }

    #root {
        display: grid;
        grid-template-rows: 60px 1fr;
    }

    nav {
        grid-row: 1;
    }

    main {
        grid-row: 2;
    }

    footer { 
        grid-row: 3;
    }

    @media screen and (max-width: 768px) {
        main {
            grid-row: span 2;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${(props) => props.theme.fonts.heading};
        font-size: 4.0rem;
    }
    p {
        font-size: 2.4rem;
    }
`;
