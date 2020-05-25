import React from 'react';

import { Container } from '@components/Layouts';
import { Button } from '@components/Inputs';
import { Text } from '@components/DataDisplay';
import { useTheme } from '@contexts/ThemeContext';

export default (): JSX.Element => {
  return (
    <Container>
      <Text variant="h3">Contained</Text>
      <Container row justify="flex-start">
        <Button size="short" onClick={useTheme()[1]}>
          Short
        </Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Short</Button>
      </Container>
      <Text variant="h3">Outlined</Text>
      <Container row justify="flex-start">
        <Button variant="outlined" size="short">
          Short
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </Container>
    </Container>
  );
};
