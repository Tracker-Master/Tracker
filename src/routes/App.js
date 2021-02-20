import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Home } from 'Pages/Home';
import { BoardInfo } from 'Pages/BoardInfo';

import { NotFound } from 'Pages/NotFound';
import { Layout } from 'Components/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/board/:boardID" component={BoardInfo} />
          {/* <Route exact path="/recomendations" component={Recomendations} /> */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export const GlobalStyles = createGlobalStyle`
*,
&::after,
&::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  ${'' /* &:link{
    color: green;
  } */}
  ${'' /* &:visited{
    color:red;
  } */}
  ${'' /* &:active{
    color:yellow;
  } */}
  ${'' /* &:focus{
    color: blue;
  } */}
}
p {
  margin: 0;
}
img {
  max-width: 100%;
  height: auto;
}
`;
