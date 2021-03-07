import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from 'Components/Layout';
import { Home } from 'Pages/Home';
import { BoardInfo } from 'Pages/BoardInfo';
import { NotFound } from 'Pages/NotFound';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/board/:ID" component={BoardInfo} />
          <Route exact path="/board/:ID/card?/:id?" component={BoardInfo} />
          <Route exact path="/board/:ID/list?/:id?" component={BoardInfo} />
          <Route exact path="/board/:ID/member?/:id?" component={BoardInfo} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};
