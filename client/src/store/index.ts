import { DefaultTheme } from "styled-components";
import { create } from "zustand";
import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";


export interface IthemeStore {
    theme: DefaultTheme,
    setTheme: () => void
}

export const UsethemeStore = create<IthemeStore>((set) => ({
    theme: lightTheme,
    setTheme: () => set((state) => ({ theme: state.theme.title === 'light' ? darkTheme : lightTheme }))
}))

interface ImodalOpen {
    open : boolean
    setModal: ()=> void
}

export const ModalStore = create<ImodalOpen>((set)=>({
    open: false,
    setModal: () => set((state)=> ({open:state.open ? false : true}))
}))