import React from 'react';

import { Container } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

export default (): JSX.Element => {
  return (
    <Container>
      <Text variant="h1">This is a Next.js template</Text>
      <Text variant="h2">This is a Next.js template</Text>
      <Text variant="h3">This is a Next.js template</Text>
      <Text variant="h4">This is a Next.js template</Text>
      <Text variant="h5">This is a Next.js template</Text>
      <Text variant="h6">This is a Next.js template</Text>
      <Text variant="p">This is a Next.js template</Text>
      <Text variant="small">This is a Next.js template</Text>
      <br />
      <Text variant="small" bold>
        This is a Next.js template
      </Text>
      <br />
    </Container>
  );
};
