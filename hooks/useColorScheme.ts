import * as React from 'react';

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
      const mq = matchMedia(`(prefers-color-scheme: ${scheme})`);

      if (mq.matches) {
        prefersColorScheme.query = mq;
        prefersColorScheme.scheme = scheme as Scheme;
      }
    });
    return prefersColorScheme;
  }
  return prefersColorScheme;
};

const useColorScheme = (defaultScheme = 'light' as Scheme): Scheme => {
  const isMounted = React.useRef<boolean>(false);
  const prefersColorScheme = React.useRef<PrefersColorScheme>(
    getPrefersColorScheme(defaultScheme),
  );
  const [scheme, setScheme] = React.useState(prefersColorScheme.current.scheme);

  React.useEffect(() => {
    const { query } = prefersColorScheme.current;

    function schemeChangeHandler(
      this: MediaQueryList,
      evt: MediaQueryListEventMap['change'],
    ): void {
      if (!evt.matches) {
        if (this?.removeEventListener) {
          this?.removeEventListener('change', schemeChangeHandler);
        } else {
          /**
           * https://github.com/microsoft/TypeScript/issues/32210
           * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList#Browser_compatibility
           */
          this?.removeListener(schemeChangeHandler);
        }
        const obj = getPrefersColorScheme(prefersColorScheme.current.scheme);

        if (isMounted.current) {
          setScheme(obj.scheme);
        }
        if (obj.query.addEventListener) {
          obj.query.addEventListener('change', schemeChangeHandler);
        } else {
          /**
           * https://github.com/microsoft/TypeScript/issues/32210
           * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList#Browser_compatibility
           */
          obj.query.addListener(schemeChangeHandler);
        }
      }
    }

    if (query.addEventListener) {
      query.addEventListener('change', schemeChangeHandler);
    } else {
      /**
       * https://github.com/microsoft/TypeScript/issues/32210
       * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList#Browser_compatibility
       */
      query.addListener(schemeChangeHandler);
    }
    isMounted.current = true;

    return (): void => {
      if (query.removeEventListener) {
        query.removeEventListener('change', schemeChangeHandler);
      } else {
        /**
         * https://github.com/microsoft/TypeScript/issues/32210
         * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList#Browser_compatibility
         */
        query.removeListener(schemeChangeHandler);
      }
      isMounted.current = false;
    };
  }, []);

  return scheme;
};

export default useColorScheme;
