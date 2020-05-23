import React from 'react';
import { AppProps } from 'next/app';

import ThemeContext from '@contexts/ThemeContext';

export default ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeContext>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeContext>
  );
};
