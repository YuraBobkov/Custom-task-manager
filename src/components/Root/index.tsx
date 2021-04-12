import { Provider as RoutoProvider } from '@routo/react';
import React, { FC } from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { Provider as ReduxProvider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Router from 'src/components/Router';
import { store } from 'src/redux';
import router from 'src/router';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

setConfig({ reloadHooks: false });

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #d0d7dc;
    font-family: Roboto, sans-serif;
  }

  *, *::after, *::before: {
    box-sizing: inherit;
  }

`;

const Root: FC = () => (
  <ReduxProvider store={store}>
    <RoutoProvider router={router}>
      <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
        <GlobalStyle />
        <Router />
        <Toaster />
      </ThemeProvider>
    </RoutoProvider>
  </ReduxProvider>
);

export default hot(Root);
