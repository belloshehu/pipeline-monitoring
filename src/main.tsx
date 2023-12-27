import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./utils/theme.ts";
import { AppContextProvider } from "./contexts/app-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={appTheme}>
        <App />
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>
);
