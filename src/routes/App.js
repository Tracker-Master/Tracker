import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'Pages/Home';
import { NotFound } from 'Pages/NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/tests" component={Test} /> */}
        {/* <Route exact path="/recomendations" component={Recomendations} /> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
