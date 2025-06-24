import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    // CSS global reset

    // 1. Use a more-intuitive box-sizing model
    *, *::before, *::after {
        box-sizing: border-box;
    }

    /* 2. Remove default margin */
    * {
        margin: 0;
    }


    body {
    /* 4. Add accessible line-height */
        line-height: 1.5;
    /* 5. Improve text rendering */
        -webkit-font-smoothing: antialiased;
    }

    /* 6. Improve media defaults */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    /* 7. Inherit fonts for form controls */
        input, button, textarea, select {
        font: inherit;
    }

    /* 8. Avoid text overflows */
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }

    /* 9. Improve line wrapping */
    // p {
    //     text-wrap: pretty;
    // }
    // h1, h2, h3, h4, h5, h6 {
    //     text-wrap: balance;
    // }

    /*
    10. Create a root stacking context
    */
    #root, #__next {
        isolation: isolate;
    }


    //Global styles
    :root {
        font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
        --font-weight-default: 400;
        --font-weight-semiBold: 600;
        --font-weight-bold: 700;
        --font-size-medium: 20px;
        --font-size-normal: 17px;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }


    @media (prefers-color-scheme: light) {
        :root {
            color: #213547;
            background-color: #ffffff;
        }
        a:hover {
            color: #747bff;
        }
        button {
            background-color: #f9f9f9;
        }
    }

`

export default GlobalStyles