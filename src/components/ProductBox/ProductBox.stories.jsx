import { storiesOf } from "@storybook/react";
import React from "react";
import ProductBox from "./ProductBox";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../../global";

storiesOf("ProductBox", module).add("Standard Product Box", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ProductBox />
  </ThemeProvider>
));
