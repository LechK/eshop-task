import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { CartProvider } from "./contexts/cart.context";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyles } from "./global";
import "normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <Routes />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
