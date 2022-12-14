import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root{
    --background: #000000;
    --red: #E52E4D;
    --blue: #5429CC;
    
    --text-title: #363F5F;
    --text-body: #969CB3;

    --gray300: #333333;
    --blueDark: #1E6F9F;
    --purpleDark: #8284FA;

    --shape: #FFFFFF;
}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    @media(max-width: 1080px) {
        font-size: 93.75%; //15px
    }

    @media(max-width: 720px) {
        font-size: 87.5%; //14px
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    margin: 0;
}
body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
}
button{
    cursor: pointer;
}
`;