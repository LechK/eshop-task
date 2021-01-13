import { storiesOf } from "@storybook/react";
import React from "react";
import InputBlock from "./QuantityBlock";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";

storiesOf("QuantityBlock", module).add("Quantity Block", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <InputBlock />
  </ThemeProvider>
));
