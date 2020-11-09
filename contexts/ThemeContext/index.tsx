import * as React from 'react';

import { Scheme } from '@types';

import { useColorScheme, useLocalStorage, useMounted } from '@hooks';

interface ColorScheme {
  scheme: Scheme;
  toggle: () => void;
}

/**
 We want the context to be undefined in case of errors and Typescript forbids
 an undefined createContext
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Theme: React.Context<ColorScheme> = React.createContext();

const ThemeContext = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const prefersColorScheme = useColorScheme();
  const [theme, setTheme] = useLocalStorage(
    'prefersColorScheme',
    prefersColorScheme,
  );
  const mounted = useMounted();

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [theme]);

  React.useEffect(() => {
    if (mounted) {
      setTheme(prefersColorScheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersColorScheme]);

  const value = React.useMemo<ColorScheme>(
    () => ({
      scheme: theme,
      toggle: (): void => setTheme(theme === 'light' ? 'dark' : 'light'),
    }),
    [setTheme, theme],
  );

  return <Theme.Provider value={value}>{children}</Theme.Provider>;
};

export const useTheme = (): [Scheme, () => void] => {
  const context = React.useContext<ColorScheme>(Theme);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return [context.scheme, context.toggle];
};

export default ThemeContext;
