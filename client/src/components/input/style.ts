import styled, { DefaultTheme } from "styled-components";
import checkIcon from '../../assets/icon-check.svg'
import { IcheckedBox } from "./types";

export const Input = styled.form`
width: 100%;
height: 48px;
display: flex;
align-items: center;
gap: 0.5rem;
padding: 0.5rem;
background-color: ${props => props.theme.colors.app};
border-radius: 0.3rem;
border: 1.5px ${props => props.theme.colors.text} solid;

@media screen and (min-width:376px){
height: 68px;
}
`

export const CheckedBox = styled.div`
    height:100%;
    width: fit-content;
    background-color: transparent;
    display: flex;
    align-items: center;
`
export const Check = styled.button<IcheckedBox>`
   width: 21px;
   height: 21px;
   background-color: transparent;
   border-radius: 50%;
   border: 0.5px ${props => props.theme.colors.text} solid;
   padding: 0.3rem;
   background:url(${props => props.isChecked ? checkIcon : null}),
    ${props => props.isChecked ? 'linear-gradient(to bottom right,hsl(192, 100%, 67%),hsl(280, 87%, 65%))' : "tranparent"} ;
   background-repeat:no-repeat;
   background-position: center;
   cursor: pointer;
`

export const InputField = styled.input`
    all: unset;
    flex-grow: 1;
    height: 100%;
    color: ${props => props.theme.colors.secundaryText};
    padding-top: 0.2rem;
    font-size: 0.9rem;

    ::placeholder{
        font-size: 0.9rem;
        color: ${props => props.theme.colors.secundaryText};
    }

     @media screen and (min-width:376px){
        font-size: 1rem;

        ::placeholder{
            font-size: 1rem;
        }
     }
`
export const ErrorMessage = styled.p`
margin-top: 0.3rem;
font-size: 0.8rem;
color: ${props => props.theme.colors.errorMessage};

 @media screen and (min-width:376px){
 font-size: 0.8rem;
 }
`
export const Spinner = styled.div`
border: 2px solid ${props => props.theme.colors.text};
border-top: 2px solid ${props => props.theme.colors.active};
border-radius: 50%; 
width: 21px;
height: 21px;
animation: spin 1s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`