import { ThemeProvider } from "styled-components";
import { ContainerApp } from "./components/container";
import { Header } from "./components/header";
import { InputNewTask } from "./components/input";
import { UsethemeStore } from "./store";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const { theme } = UsethemeStore();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContainerApp header={<Header />} input={<InputNewTask />} />
    </ThemeProvider>
  );
};
