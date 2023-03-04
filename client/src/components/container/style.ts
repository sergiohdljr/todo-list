import styled from "styled-components";

interface Icustomize {
    w: string,
    max_w?: string,
    h: string,
    flex_D: "column" | "row"
    gap?: "1rem"
    margin?: "auto 0"
    border_r?: "0.3rem"
    max_h?: "370px"
    ovrflw?: "scroll"
}

export const Container = styled.div<Icustomize>`
 width: ${props => props.w};
 max-width: ${props => props.max_w};
 max-height: ${props => props.max_h};
 overflow-y: ${props => props.ovrflw};
 overflow-x: hidden;
 scroll-behavior: smooth;
 height: ${props => props.h};
 margin: ${props => props.margin};
 background-color: transparent;
 display: flex;
 flex-direction: column;
 gap: ${props => props.gap};
 border-radius:${props => props.border_r};
`