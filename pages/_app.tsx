import React from 'react';
import { Moon, Sun } from 'react-feather';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { useMounted } from '@hooks';
import { theme } from '@utils';

import ThemeContext, { useTheme } from '@contexts/ThemeContext';

import { Toggle } from '@components/Inputs';
import { Container } from '@components/Layouts';

import 'styles/fonts.css';
import 'styles/main.css';

const AppContent = ({ Component, pageProps }: AppProps): JSX.Element => {
  const mounted = useMounted();
  const [scheme, toggle] = useTheme();

  if (!mounted) {
    return <></>;
  }

  return (
    <ThemeProvider theme={{ mode: scheme }}>
      <Container row justify="flex-end">
        <Sun size={16} color={theme.cvar('colorForeground')} />
        <Toggle toggled={scheme === 'dark'} onChange={(): void => toggle()} />
        <Moon size={16} color={theme.cvar('colorForeground')} />
      </Container>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

const App = (props: AppProps): JSX.Element => {
  return (
    <ThemeContext>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <AppContent {...props} />
    </ThemeContext>
  );
};

export default App;
