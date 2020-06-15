import React from 'react';
import { Moon, Sun } from 'react-feather';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledTheme from 'styled-theming';

import { useMounted } from '@hooks';
import { theme } from '@utils';

import ThemeContext, { useTheme } from '@contexts/ThemeContext';

import { Toggle } from '@components/Inputs';
import { Container } from '@components/Layouts';

const backgroundColor = styledTheme('mode', theme.colors['--default']);

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JetBrains Mono';
    font-weight: normal;
    font-style: italic;
    font-display: swap;
    unicode-range: U+000-5FF;
    src: local('JetBrains Mono'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2') format('woff2'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    unicode-range: U+000-5FF;
    src: local('JetBrains Mono'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2') format('woff2'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-weight: 800;
    font-style: italic;
    font-display: swap;
    unicode-range: U+000-5FF;
    src: local('JetBrains Mono'),
    url('/fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2') format('woff2'),
    url('/fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    unicode-range: U+000-5FF;
    src: local('JetBrains Mono'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2') format('woff2'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-weight: 800;
    font-style: normal;
    font-display: swap;
    unicode-range: U+000-5FF;
    src: local('JetBrains Mono'),
    url('/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2') format('woff2'),
    url('/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    unicode-range: U+000-5FF;
    src: local('JetBrains Mono'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2') format('woff2'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-weight: 500;
    font-style: italic;
    font-display: swap;
    unicode-range: U+000-5FF;
    src: local('JetBrains Mono'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2') format('woff2'),
    url('/fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-weight: bold;
    font-style: italic;
    font-display: swap;
    unicode-range: U+000-5FF;
    src: local('JetBrains Mono'),
    url('/fonts/JetBrainsMono-Bold-Italic.woff2') format('woff2'),
    url('/fonts/JetBrainsMono-Bold-Italic.woff') format('woff');
  }

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
  const [scheme, toggle] = useTheme();
  const mounted = useMounted();

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
