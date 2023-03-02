import bgDarkMobile from "../../assets/bg-mobile-dark.jpg";
import bgDarkDesktop from "../../assets/bg-desktop-dark.jpg";
import lightThemeIcon from "../../assets/icon-sun.svg"

export const darkTheme = {
    title: 'dark',

    colors: {
        background: 'hsl(235, 21%, 11%)',
        app: 'hsl(235, 24%, 19%)',
        text: 'hsl(234, 39%, 85%)',
        secundaryText: 'hsl(234, 11%, 52%)',
        active: 'hsl(220,98%,61%)',
        checkBackground: 'linear-gradient(to bottom right,hsl(192, 100%, 67%),hsl(280, 87%, 65%))',
        errorMessage:'#8B0000'
    },

    imagens: {
        backgroundImageMobile: `${bgDarkMobile}`,
        backgroundImageDestkop: `${bgDarkDesktop}`,
        iconTheme: `${lightThemeIcon}`
    }
}