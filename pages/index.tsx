import React from 'react';

import { Container } from '@components/Layouts';
import { Button, Select } from '@components/Inputs';
import { useTheme } from '@contexts/ThemeContext';

export default (): JSX.Element => {
  return (
    <Container align="center" justify="stretch">
      <Button variant="secondary" onClick={useTheme()[1]}>
        Switch Theme
      </Button>
      <Select />
    </Container>
  );
};
