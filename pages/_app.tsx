import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { useMounted } from '@hooks';
import { theme } from '@utils';

import ThemeContext, { useTheme } from '@contexts/ThemeContext';

import { Page } from '@components/Layouts';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Montserrat, "Roboto Light", sans-serif;
  }

  html, body {
    background: ${({ theme: scheme }): string =>
      scheme === 'dark' ? theme.colors.dark : theme.colors.light};
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
      <GlobalStyle theme={scheme} />
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
