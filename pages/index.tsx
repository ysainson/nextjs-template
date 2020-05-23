import React from 'react';

import { useTheme } from '@contexts/ThemeContext';

export default (): JSX.Element => {
  const [theme, toggle] = useTheme();

  return (
    <button type="button" onClick={toggle}>
      {theme}
    </button>
  );
};
