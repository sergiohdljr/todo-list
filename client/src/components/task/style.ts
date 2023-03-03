import styled from "styled-components";

export const Tarefa = styled.div`
width: 100%;
height: 54px;
display: flex;
gap: 0.3rem;
padding: 0.5rem;
background-color: ${props=>props.theme.colors.app};
`

export const TaskTitle = styled.p`
color: ${props=>props.theme.colors.secundaryText};
flex: 1;
display: flex;
align-items: center;
padding-top: 0.2rem;
`