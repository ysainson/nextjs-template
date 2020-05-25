import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import '../global.styles.css';

import { useMounted } from '@hooks';

import ThemeContext, { useTheme } from '@contexts/ThemeContext';

import { Page } from '@components/Layouts';

const AppContent = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [theme] = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }

  return (
    <ThemeProvider theme={{ mode: theme }}>
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
