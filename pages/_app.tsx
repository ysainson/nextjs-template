import React from 'react';
import { Moon, Sun } from 'react-feather';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { useMounted } from '@hooks';
import { theme } from '@utils';

import ThemeContext, { useTheme } from '@contexts/ThemeContext';

import { Toggle } from '@components/Inputs';
import { Container } from '@components/Layouts';

import 'fonts.styles.css';

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark light;
    --background: #fff;
    --typography-primary: #000;
  }

  .dark-theme {
    --background: #000;
    --typography-primary: #fff;
  }

  html, body {
    background: var(--background);
    margin: 0;
    padding: 0;
  }
`;

const AppContent = ({ Component, pageProps }: AppProps): JSX.Element => {
  const mounted = useMounted();
  const [scheme, toggle] = useTheme();

  if (!mounted) {
    return <></>;
  }

  return (
    <ThemeProvider theme={{ mode: scheme }}>
      <GlobalStyle />
      <Container row justify="flex-end">
        <Sun size={16} color={theme.colors['--default-inverted'][scheme]} />
        <Toggle toggled={scheme === 'dark'} onChange={(): void => toggle()} />
        <Moon size={16} color={theme.colors['--default-inverted'][scheme]} />
      </Container>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
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
