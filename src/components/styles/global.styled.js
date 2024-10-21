import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

    body {
        margin: 0;
        font-family: "Rubik", sans-serif;
  f     font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        background-color: #331E36;
        // background-color: #F1E5D1;
        //${({theme}) => theme.colors.secondary.main}
    }
    
    .heading {
        font-size: 40px;

        @media screen and (max-width: 992px) {
            font-size: 32px;
        }
        @media screen and (max-width: 768px) {
            font-size: 24px;
        }
        @media screen and (max-width: 600px) {
            font-size: 16px;
        }
    }
`;

export default GlobalStyles;