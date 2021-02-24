import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from 'Components/Layout';
import { Home } from 'Pages/Home';
import { BoardInfo } from 'Pages/BoardInfo';
import { NotFound } from 'Pages/NotFound';

import { BoardContextProvider } from 'Context/BoardContext';

import { GlobalStyle } from 'Styles/GlobalStyles';

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
