import React from 'react';

import { Container } from '@components/Layouts';
import { Button } from '@components/Inputs';
import { Text } from '@components/DataDisplay';
import { useTheme } from '@contexts/ThemeContext';

export default (): JSX.Element => {
  return (
    <Container>
      <Text variant="h1">Button</Text>
      <Text variant="h3">Variant</Text>
      <Container row justify="flex-start">
        <Button>Primary</Button>
        <Button variant="secondary" onClick={useTheme()[1]}>
          Secondary
        </Button>
      </Container>
      <Text variant="h3">Size</Text>
      <Container row justify="flex-start">
        <Button variant="secondary" size="short">
          Short
        </Button>
        <Button variant="secondary">Medium</Button>
        <Button variant="secondary" size="long">
          Long
        </Button>
      </Container>
      <Text variant="h3">Thickness</Text>
      <Container row justify="flex-start">
        <Button variant="secondary" thickness="small">
          Small
        </Button>
        <Button variant="secondary">Medium</Button>
        <Button variant="secondary" thickness="large">
          Large
        </Button>
      </Container>
    </Container>
  );
};
