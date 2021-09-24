import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    :root{
        --app-bar-height: 50px;
        --side-bar-width:100px;
        --app-color-primary: #CAE9FF;
        --app-color-secondary: #1B4965; 
    }
    body{
        font-family:'Roboto Mono', monospace;
    }

    * {
      margin: 0; 
      padding: 0; 
      border: 0; 
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 16px;
    }

    p {
      margin: 16px;
    }
`;

export default globalStyle;

export const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
  up(size) {
    return `(min-width: ${this[size]})`;
  },
  down(size) {
    return `max-width: ${this[size]}`;
  },
};
