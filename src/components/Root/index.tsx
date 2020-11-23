import { Provider as RoutoProvider } from '@routo/react';
import React, { FC } from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { Provider as ReduxProvider } from 'react-redux';

import Router from 'src/components/Router';
import { store } from 'src/redux';
import router from 'src/router';

setConfig({ reloadHooks: false });

const Root: FC = () => (
  <ReduxProvider store={store}>
    <RoutoProvider router={router}>
      <Router />
    </RoutoProvider>
  </ReduxProvider>
);

export default hot(Root);
