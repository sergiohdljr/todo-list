import styled from "styled-components";
import { IcheckedBox } from "../input/style";

export const Tarefa = styled.div`
width: 100%;
min-height: 54px;
display: flex;
gap: 0.3rem;
padding: 0.5rem;
background-color: ${props=>props.theme.colors.app};

 @media screen and (min-width:376px){
    height: 66px;
 }
`

export const TaskTitle = styled.p<IcheckedBox>`
color: ${props=>props.theme.colors.secundaryText};
flex: 1;
display: flex;
align-items: center;
padding-top: 0.2rem;
text-decoration:${props => props.isChecked ? "line-through" : null};
`

interface Delete {
   onClick : () => void
}

export const DeleteTaskBtn = styled.button<Delete>`
all: unset;
width:25px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color:${props=>props.theme.colors.text};
font-size: 0.8rem;
font-weight: 200;
cursor: pointer;
`