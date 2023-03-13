import styled from "styled-components";

export const Modal = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0, 0.4);
`

export const ModalContent = styled.div`
    padding: 0.3rem;
    width: 85%;
    max-width: 468px;
    height: 150px;
    background-color:${props => props.theme.colors.app};
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:0.3rem;
    transition: all 0.2s ease-out;

    .button--close{
        cursor: pointer;
        display: flex;
        align-self: flex-end;
        background-color: transparent;
        border: none;

        :hover{
            opacity: 40%;
        }
    }

     h3{
        font-weight: 500;
        font-size: 1.2rem;
        color:${props => props.theme.colors.secundaryText}
     }

    form{
        width: 95%;
        height: 80%;
    
        .form-div{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        }

        input{
            flex-grow: 1;
            width: 70%;
            height: 40px;
            border: 1px ${props => props.theme.colors.secundaryText} solid;
            border-radius: 0.3rem 0 0 0.3rem;
            outline: none;
            padding-left: 0.3rem;
            font-size: 0.9rem;
            color: ${props => props.theme.colors.secundaryText};

            ::placeholder{
                color: ${props => props.theme.colors.secundaryText}
            }
        }

        button{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            background: linear-gradient(to bottom right,hsl(192, 100%, 67%),hsl(280, 87%, 65%));
            border-radius: 0rem 0.3rem 0.3rem 0rem;
            outline: none;
            border: none;
            :hover{
                 opacity: 75%;
                 background: linear-gradient(to bottom right,hsl(280, 87%, 65%),hsl(192, 100%, 67%))
            }
        }
    }
`