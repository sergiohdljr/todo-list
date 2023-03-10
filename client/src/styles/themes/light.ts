import bgLightMobile from "../../assets/bg-mobile-light.jpg";
import bgLightDesktop from "../../assets/bg-desktop-light.jpg"
import darkThemeIcon from "../../assets/icon-moon.svg"


export const lightTheme = {
    title: 'light',

    colors: {
        background: 'hsl(236, 33%, 92%)',
        app: 'hsl(0, 0%, 98%)',
        text: 'hsl(233, 11%, 84%)',
        secundaryText: 'hsl(236, 9%, 61%)',
        active: 'hsl(220,98%,61%)',
        checkBackground: 'linear-gradient(to bottom right,hsl(192, 100%, 67%),hsl(280, 87%, 65%))',
        errorMessage: 'red'
    },

    imagens: {
        backgroundImageMobile: `${bgLightMobile}`,
        backgroundImageDestkop: `${bgLightDesktop}`,
        iconTheme: `${darkThemeIcon}`
    }
}