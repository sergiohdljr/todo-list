import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            app: string;
            text: string;
            secundaryText: string;
            active: string;
            checkBackground: string;
        },
        imagens: {
            backgroundImageMobile: string,
            backgroundImageDestkop: string
        }
    }
}