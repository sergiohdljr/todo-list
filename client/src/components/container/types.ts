export interface Icustomize {
    w: string,
    max_w?: string,
    h: string,
    flex_D: "column" | "row"
    gap?: "1rem"
    margin?: "auto 0"
    border_r?: "0.3rem"
    max_h?: "370px"
    ovrflw?: "scroll"
    background: "transparent" | "'hsl(0, 0%, 98%)'"
}

export type Icontainer = {
    children: React.ReactNode;
};