import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { App } from "./App";
import { Client } from "./service/service";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={Client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
