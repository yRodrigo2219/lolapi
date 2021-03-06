import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Header />

        <Route path='/'>

        </Route>
      </Switch>
    </BrowserRouter>
  );
}