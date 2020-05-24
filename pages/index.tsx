import React from 'react';

import { useTheme } from '@contexts/ThemeContext';

import { Page } from '@components/Layouts';
import { Button } from '@components/Inputs';

export default (): JSX.Element => {
  const [theme, toggle] = useTheme();

  return (
    <Page>
      <Button onClick={toggle} variant="contained">
        {theme}
      </Button>
    </Page>
  );
};
