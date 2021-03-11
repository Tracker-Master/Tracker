import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from 'Components/Layout';
import { Home } from 'Pages/Home';
import { AboutUs } from 'Pages/AboutUs';
import { BoardInfo } from 'Pages/BoardInfo';
import { BoardContextProvider } from 'Context/BoardContext';
import { NotFound } from 'Pages/NotFound';

import { GlobalStyle } from 'Styles/GlobalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          {/* <Route exact path="/howItWorks" component={HowItWorks} /> */}
          <BoardContextProvider>
            <Route exact path="/board/:ID" component={BoardInfo} />
            {/* <Route exact path="/board/:ID/card?/:id?" component={BoardInfo} />
            <Route exact path="/board/:ID/list?/:id?" component={BoardInfo} />
          <Route exact path="/board/:ID/member?/:id?" component={BoardInfo} /> */}
          </BoardContextProvider>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
