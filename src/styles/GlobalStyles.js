import { createGlobalStyle } from 'styled-components';

export const palette = {
  firstColor: `#673AB7`,
  firstColorAlpha: `rgba(103, 58, 183, 0.75)`,
  secondColor: `#8BC34A`,
  secondColorAlphaColor: `rgba(139, 195, 74, 0.75)`,
  firstDarkerColor: `#512da8`,
  firstDarkerColorAlpha: `rgba(81, 45, 168, 0.75)`,
  whiteColor: `#fff`,
  whiteColorAlpha: `rgba(255, 255, 255, 0.5)`,
  fistTitleColor: `#673AB7`,
  secondTitleColor: `#8BC34A`,
  firstTextColor: `#212121`,
  secondTextColor: `#757575`,
  dividerColor: `#bdbdbd`,
  dividerColorAlpha: `rgba(189, 189, 189, 0.75)`,
  cardsBorder: `#707070`,
  cardsBorderAlpha: `rgba(112, 112, 112, 0.25)`,
  degradedPurple: `#764BA2`,
  degradedBlue: `#667EEA`,
  skeletonColor: `rgba(103, 58, 183, 0.15)`,
};

export const fonts = {
  font: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
};
export const sizes = {
  mobile: `375px`,
  tablet: `768px`,
  desktop: `1024px`,
  desktop_4k: `1440px`,
};
export const devices = {
  breakpointsMobile: `(min-width: ${sizes.mobile})`,
  breakpointsTablet: `(min-width: ${sizes.tablet})`,
  breakpointsDesktop: `(min-width: ${sizes.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
*,
&::after,
&::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-family: ${fonts.font};
  scroll-behavior: smooth;
  height: 100vh;
}
body {
  margin: 0;
  overflow-x: hidden;
}
a{
  display: block;
  text-align: center;
  text-decoration: none;
  transition: all 0.5 ease-out;
  &:hover{
    opacity: 0.75;
  }
}
p {
  margin: 0;
}
img {
  max-width: 100%;
  height: auto;
}
`;
