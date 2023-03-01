import styled from "styled-components";

export const Input = styled.div`
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

export const Checked = styled.div`
    height:100%;
    background-color: transparent;
    display: flex;
    align-items: center;
`

export const Ball = styled.div`
   width: 21px;
   height: 21px;
   background-color: transparent;
   border-radius: 50%;
   border: 1px ${props => props.theme.colors.text} solid;
`

export const InputField = styled.input`
    all: unset;
    flex-grow: 1;
    height: 100%;
    color: ${props => props.theme.colors.secundaryText};
    padding-top: 0.2rem;

    ::placeholder{
        color: ${props => props.theme.colors.secundaryText};
    }
`
    
