import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import '../global.styles.css';

import { useMounted } from '@hooks';

import ThemeContext, { useTheme } from '@contexts/ThemeContext';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [theme] = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }

  return (
    <ThemeProvider theme={{ mode: theme }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default (props: AppProps): JSX.Element => {
  return (
    <ThemeContext>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <App {...props} />
    </ThemeContext>
  );
};
