import React, { Fragment } from 'react';

import Routes from './Routes';
import GlobalStyle from './assets/css/GlobalStyle';

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}
