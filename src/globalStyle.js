import { createGlobalStyle, css } from "styled-components";

export const appColorPrimary = "#CAE9FF";
export const appColorSecondary = "#1B4965";

const globalStyle = createGlobalStyle`
 :root{
     --app-color-primary: #D1EFF2;
     --app-color-secondary:#4DD0E1
;
     
}
 *, *::before, *::after {
     box-sizing: border-box;
}
 input, button, textarea, select {
     font: inherit;
}
 body{
     min-height: 100vh;
     font-size: 1.5rem;
     line-height: 1.5;
     background: linear-gradient(to top,var(--app-color-secondary),var(--app-color-primary),#E0F7FA) ;
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
};

const withFallback = (value, fallbackValue = "initial") =>
  value || fallbackValue;

// See: https://styled-components.com/docs/api#transient-props

export const sizeable = css`
  ${({ $width, $maxWidth, $minWidth, $height, $minHeight, $maxHeight }) =>
    `
  width: ${withFallback($width)};
  max-width: ${withFallback($maxWidth)};
  min-width: ${withFallback($minWidth)};
  height: ${withFallback($height)};
  max-height: ${withFallback($maxHeight)};
  min-height: ${withFallback($minHeight)};
  `}
`;

export const elevatable = css`
  box-shadow: ${({ $elevation }) =>
    $elevation
      ? `${$elevation}px ${$elevation}px 16px 0 rgba(0,0,0,0.3) `
      : "initial"};
`;

export const clickable = css`
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 100%);
  }
  &:active {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 100%);
  }
`;
