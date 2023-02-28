import { ThemeProvider } from "styled-components";
import { ContainerApp } from "./components/container";
import { Header } from "./components/header";
import { UsethemeStore } from "./store";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const { theme } = UsethemeStore();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContainerApp>
        <Header />
      </ContainerApp>
    </ThemeProvider>
  );
};
