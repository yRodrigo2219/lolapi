import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Routes from './Routes';
import GlobalStyle from './assets/css/GlobalStyle';
import { initApp } from './store/ducks/pages/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}
