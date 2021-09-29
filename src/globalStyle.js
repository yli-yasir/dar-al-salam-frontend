import { createGlobalStyle, css } from "styled-components";

const globalStyle = createGlobalStyle`
    :root{
        --app-bar-height: 50px;
        --side-bar-width:200px;
        --app-color-primary: #CAE9FF;
        --app-color-secondary: #1B4965; 
    }
    body{
        font-family:'Roboto Mono', monospace;
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

export const clickable = css`
  cursor: pointer;
  user-select: none;
  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 100%);
  }
  &:active {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 100%);
  }
`;
