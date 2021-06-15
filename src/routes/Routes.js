import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import HomeLogin from '../pages/HomeLogin';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stick">
          <HomeLogin />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
