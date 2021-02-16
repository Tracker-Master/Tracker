import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Home } from 'Pages/Home';
import { NotFound } from 'Pages/NotFound';
import { Layout } from 'Components/Layout';

const GlobalStyle = createGlobalStyle`
:root {
  ${
    '' /* --first-color: #d90062;
  --first-alpha-color: rgba(217, 0, 98, 0.75);
  --second-color: #14192d;
  --second-alpha-color: rgba(20, 25, 45, 0.75);
  --third-color: #501464;
  --third-alpha-color: rgba(80, 20, 100, 0.75);
  --white: #fff;
  --white-alpha-color: rgba(255, 255, 255, 0.5);
  --gray-light-color: #f3f3f3;
  --gray-color: #ccc;
  --gray-dark-color: #666;
  --black-color: #000;
  --black-alpha-color: rgba(0, 0, 0, 0.5);
  --link-color: #509ee3;
  --title-color: #333;
  --text-color: #222; */
  }
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  --breakpoint-mobile: 375px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1440px;

}
*,
&::after,
&::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-family: var(--font);
  scroll-behavior: smooth;
  height: 100vh;
}
body {
  margin: 0;
  overflow-x: hidden;
}
a{
  margin: 1rem;
  display: block;
  ${'' /* font-size: 2rem; */}
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

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/tests" component={Test} /> */}
          {/* <Route exact path="/recomendations" component={Recomendations} /> */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
