import { ThemeProvider } from "styled-components";
import { Wrapper } from "./components/container";
import { Container } from "./components/container/style";
import { Header } from "./components/header";
import { InputNewTask } from "./components/input";
import { UsethemeStore } from "./store";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const { theme } = UsethemeStore();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <InputNewTask />
        <Container flex_D={"row"} h={"375px"} w={"100%"} border_r={"0.3rem"} >
         <p>sergio</p>
         <p>henrique</p>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};
