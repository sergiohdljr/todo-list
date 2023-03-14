import styled from "styled-components";
import { IcheckedBox } from "../input/types";

export const Tarefa = styled.div`
width: 100%;
min-height: 54px;
display: flex;
align-items: center;
gap: 0.3rem;
padding: 0 0 0 0.5rem;
background-color: ${props => props.theme.colors.app};

 @media screen and (min-width:376px){
    height: 66px;
 }
`

export const TaskTitle = styled.p<IcheckedBox>`
color: ${props => props.theme.colors.secundaryText};
flex: 1;
display: flex;
align-items: center;
padding-top: 0.2rem;
font-size: 0.9rem;
text-decoration:${props => props.isChecked ? "line-through" : null};
opacity: ${props=> props.isChecked ? "70%" : null};
 
@media screen and (min-width:376px){
font-size: 1rem;
 }
`

export const DeleteTaskBtn = styled.button`
all: unset;
width:25px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;

:hover{
   opacity: 80%;
}
`

export const EditTaskBtn = styled(DeleteTaskBtn)``