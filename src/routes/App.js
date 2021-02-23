import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Layout } from 'Components/Layout';
import { Home } from 'Pages/Home';
import { BoardInfo } from 'Pages/BoardInfo';
import { NotFound } from 'Pages/NotFound';

import { fonts } from './GlobalStyles';
import { BoardContextProvider } from 'Context/BoardContext';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <BoardContextProvider>
            <Route exact path="/board/:ID" component={BoardInfo} />
            <Route exact path="/board/:ID/card?/:id?" component={BoardInfo} />
            <Route exact path="/board/:ID/list?/:id?" component={BoardInfo} />
            <Route exact path="/board/:ID/member?/:id?" component={BoardInfo} />
          </BoardContextProvider>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

const GlobalStyle = createGlobalStyle`
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
