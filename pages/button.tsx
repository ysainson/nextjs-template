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
        <Button size="short">Short</Button>
        <Button>Medium</Button>
        <Button size="long">Long</Button>
      </Container>
      <Text variant="h3">Thickness</Text>
      <Container row justify="flex-start">
        <Button thickness="small">Small</Button>
        <Button>Medium</Button>
        <Button thickness="large">Large</Button>
      </Container>
    </Container>
  );
};
