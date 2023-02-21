import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
