import { createGlobalStyle, css } from "styled-components";

export const appColorPrimary = "#CAE9FF";
export const appColorSecondary = "#1B4965";

const globalStyle = createGlobalStyle`
    :root{
        --app-bar-height: 50px;
        --side-bar-width:200px;
        --app-color-primary: ${appColorPrimary};
        --app-color-secondary:${appColorSecondary}; 
    }
    body{
        font-family:'Roboto Mono', monospace;
    }
    ul{
      margin:0;
    }
    svg {
      margin:8px;
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
    return `(max-width: ${this[size]})`;
  },
  appBarShown(bool) {
    return bool ? this.down("sm") : this.up("sm");
  },
  permanentSideBar(bool) {
    return bool ? this.appBarShown(false) : this.appBarShown(true);
  },
};

export const clickable = css`
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 100%);
  }
  &:active {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 100%);
  }
`;

export const fullWidthable = css`
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "initial")};
`;

export const elevatable = css`
  box-shadow: ${({ $elevation }) =>
    $elevation
      ? `${$elevation}px ${$elevation}px 16px 0 rgba(0,0,0,0.3) `
      : "initial"};
`;
