import styled from "styled-components";
import { Icustomize } from "./types";

export const Container = styled.div<Icustomize>`
 width: ${props => props.w};
 max-width: ${props => props.max_w};
 max-height: ${props => props.max_h};
 overflow-y: ${props => props.ovrflw};
 overflow-x: hidden;
 scroll-behavior: smooth;
 height: ${props => props.h};
 margin: ${props => props.margin};
 background-color: ${props => props.background};
 display: flex;
 flex-direction: column;
 justify-content: ${props=>props.justify_c};
 gap: ${props => props.gap};
 border-radius:${props => props.border_r};

 ::-webkit-scrollbar{
    width: 8px;
    height: 100%;
 }

 ::-webkit-scrollbar-track{
    border-radius: 0 0.3rem 0.3rem 0;
    background-color: ${props => props.theme.colors.app};
 }

 ::-webkit-scrollbar-thumb{
    border-radius: 0.3rem;
    background-color: ${props => props.theme.colors.text};
 }
`