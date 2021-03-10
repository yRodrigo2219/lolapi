import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Routes from './Routes';
import GlobalStyle from './assets/css/GlobalStyle';
import { loadRequest } from './store/ducks/timeTracker/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('test')
    dispatch(loadRequest());
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}
