import { useEffect, useRef, useState } from 'react';

import { Scheme } from '@types';

interface PrefersColorScheme {
  query: MediaQueryList;
  scheme: Scheme;
}

const getPrefersColorScheme = (defaultScheme: Scheme): PrefersColorScheme => {
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const prefersColorScheme = {
    query: {} as MediaQueryList,
    scheme: defaultScheme,
  };

  if (supportMatchMedia) {
    ['dark', 'light'].forEach((scheme) => {
      const mq = matchMedia(`(prefers-color-scheme: ${scheme}`);

      if (mq.matches) {
        prefersColorScheme.query = mq;
        prefersColorScheme.scheme = scheme as Scheme;
      }
    });
    return prefersColorScheme;
  }
  return prefersColorScheme;
};

export default (defaultScheme = 'light' as Scheme): Scheme => {
  const isMounted = useRef<boolean>(false);
  const prefersColorScheme = useRef<PrefersColorScheme>(
    getPrefersColorScheme(defaultScheme)
  );
  const [scheme, setScheme] = useState(prefersColorScheme.current.scheme);

  useEffect(() => {
    const { query } = prefersColorScheme.current;

    function schemeChangeHandler(
      this: MediaQueryList,
      evt: MediaQueryListEventMap['change']
    ): void {
      if (!evt.matches) {
        this.removeEventListener('change', schemeChangeHandler);
        const obj = getPrefersColorScheme(prefersColorScheme.current.scheme);

        if (isMounted.current) {
          setScheme(obj.scheme);
        }
        obj.query.addEventListener('change', schemeChangeHandler);
      }
    }

    query.addEventListener('change', schemeChangeHandler);
    isMounted.current = true;

    return (): void => {
      query.removeEventListener('change', schemeChangeHandler);
      isMounted.current = false;
    };
  }, []);

  return scheme;
};
