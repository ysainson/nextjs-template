import React from 'react';

import { Container } from '@components/Layouts';
import { InlineCode, Link, Text } from '@components/DataDisplay';
import { Slider } from '@components/Inputs';

export default (): JSX.Element => {
  return (
    <Container align="center">
      <Container>
        <Text variant="h1">Welcome on Next.js template!</Text>
        <Text variant="h5">
          Click on components below to get the documentation.
        </Text>
        <Link href="/storybook/container" prefetch>
          <Text variant="h4">
            <InlineCode>Container</InlineCode>
          </Text>
        </Link>
        <Link href="/storybook/button" prefetch>
          <Text variant="h4">
            <InlineCode>Button</InlineCode>
          </Text>
        </Link>
        <Link href="/storybook/select" prefetch>
          <Text variant="h4">
            <InlineCode>Select</InlineCode>
          </Text>
        </Link>
        <Link href="/storybook/checkbox" prefetch>
          <Text variant="h4">
            <InlineCode>Checkbox</InlineCode>
          </Text>
        </Link>
      </Container>
      <Slider />
    </Container>
  );
};
