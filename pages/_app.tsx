import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledTheme from 'styled-theming';

import { useMounted } from '@hooks';
import { theme } from '@utils';

import ThemeContext, { useTheme } from '@contexts/ThemeContext';

import { Page } from '@components/Layouts';

const backgroundColor = styledTheme('mode', theme.colors['--default']);

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Montserrat, "Roboto Light", sans-serif;
    outline: none;
  }

  html, body {
    background: ${backgroundColor};
    margin: 0;
    padding: 0;
  }
`;

const AppContent = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [scheme] = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }

  return (
    <ThemeProvider theme={{ mode: scheme }}>
      <GlobalStyle />
      <Page>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
};

export default (props: AppProps): JSX.Element => {
  return (
    <ThemeContext>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <AppContent {...props} />
    </ThemeContext>
  );
};
