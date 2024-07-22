import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/i18n.ts";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import {
  alpha,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

let theme = createTheme({
  palette: {
    text: {
      primary: alpha("#ffffff", 0.87),
    },
    primary: {
      main: alpha("#ffffff", 0.87),
    },
    secondary: {
      main: "#1a1a1a",
      contrastText: "#FFD700",
    },
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
