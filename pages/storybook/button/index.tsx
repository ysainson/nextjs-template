import React from 'react';

import { Container } from '@components/Layouts';
import { Button } from '@components/Inputs';
import { Text, Link } from '@components/DataDisplay';

export default (): JSX.Element => {
  return (
    <Container align="center">
      <Container>
        <Container>
          <Text variant="h1">Button</Text>
          <Text variant="h5">
            Used to trigger an operation.&nbsp;
            <Link href="/storybook/button/play">Try it yourself!</Link>
          </Text>
        </Container>
        <Container>
          <Text variant="h3">Variant</Text>
        </Container>
        <Container row justify="flex-start" gap={0}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </Container>
        <Container>
          <Text variant="h3">Size</Text>
        </Container>
        <Container row justify="flex-start" gap={0}>
          <Button variant="secondary" size="short">
            Short
          </Button>
          <Button variant="secondary">Medium</Button>
          <Button variant="secondary" size="long">
            Long
          </Button>
        </Container>
        <Container>
          <Text variant="h3">Thickness</Text>
        </Container>
        <Container row justify="flex-start" gap={0}>
          <Button variant="secondary" thickness="small">
            Small
          </Button>
          <Button variant="secondary">Medium</Button>
          <Button variant="secondary" thickness="large">
            Large
          </Button>
        </Container>
        <Container>
          <Text variant="h3">Disabled</Text>
        </Container>
        <Container row justify="flex-start" gap={0}>
          <Button disabled variant="primary">
            Disabled
          </Button>
        </Container>
      </Container>
    </Container>
  );
};
