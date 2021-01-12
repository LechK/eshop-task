import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
  body {    
    background: ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.dark};    
    text-rendering: optimizeLegibility;
    font-family: 'Open Sans', sans-serif;
  }
`;
