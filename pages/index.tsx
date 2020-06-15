import React from 'react';

import { Container } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

export default (): JSX.Element => {
  return (
    <Container align="center" justify="stretch">
      <Text variant="h1">Welcome on Next.js template!</Text>
    </Container>
  );
};
