import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
  *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-size: 18px;
        font-family: 'Josefin Sans', sans-serif;
    }

    #root{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.background};
        width: 100%;
        background-image: url(${props => props.theme.imagens.backgroundImageMobile});
        background-repeat: no-repeat;
        background-size: auto;

        @media screen and (min-width:376px){
        height: 300px;
        background-image: url(${props => props.theme.imagens.backgroundImageDestkop});
 }
    }
 `