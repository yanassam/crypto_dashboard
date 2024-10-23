import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; //Importing our custom theme

const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендерим приложение с использованием createRoot
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
