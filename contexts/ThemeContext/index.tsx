import React, {
  createContext,
  useEffect,
  useMemo,
  ReactNode,
  useContext,
} from 'react';

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
const ThemeContext: React.Context<ColorScheme> = createContext();

export default ({ children }: { children: ReactNode }): JSX.Element => {
  const prefersColorScheme = useColorScheme();
  const [theme, setTheme] = useLocalStorage(
    'prefersColorScheme',
    prefersColorScheme
  );
  const mounted = useMounted();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [theme]);

  useEffect(() => {
    if (mounted) {
      setTheme(prefersColorScheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersColorScheme]);

  const value = useMemo<ColorScheme>(
    () => ({
      scheme: theme,
      toggle: (): void => setTheme(theme === 'light' ? 'dark' : 'light'),
    }),
    [setTheme, theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): [Scheme, () => void] => {
  const context = useContext<ColorScheme>(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return [context.scheme, context.toggle];
};
