import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Match from './pages/Match';

export default function Routes() {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Header />

      <Switch>
        <Route path='/match/:id'>
          <Match />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}