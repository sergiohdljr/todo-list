import styled from "styled-components";

export const HeaderApp = styled.header`
 width: 100%;
 height: 30px;
 display: flex;
 align-items: center;
`

export const TextHeader = styled.h1`
flex-grow: 1;
display: flex;
align-items: center;
text-transform: uppercase;
color: ${props=>props.theme.colors.background};
letter-spacing: 0.8rem;
font-size: 1.5rem;
font-weight: 700;
padding-top: 0.3rem;
`
export const HeaderSwitchTheme = styled.button`
all: unset;
width: 30px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
background-image: url(${props=>props.theme.imagens.iconTheme});
background-repeat: no-repeat;
background-position: center;
background-size: 21px;
`