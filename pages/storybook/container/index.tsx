import React from 'react';

import { uuid } from '@utils';

import { Container, Spacer } from '@components/Layouts';
import { InlineCode, Link, Text } from '@components/DataDisplay';

export default (): JSX.Element => {
  const flexContent = [
    'flex-start',
    'flex-end',
    'space-around',
    'space-evenly',
    'space-between',
    'stretch',
    'center',
  ];

  const data = [
    { prop: 'children', types: ['ReactNode'] },
    { prop: 'row', types: ['boolean'], optional: true },
    { prop: 'noWrap', types: ['boolean'], optional: true },
    {
      prop: 'justify',
      types: flexContent,
      optional: true,
    },
    {
      prop: 'align',
      types: flexContent,
      optional: true,
    },
    { prop: 'gap', types: ['0 - 8'], optional: true },
  ];

  return (
    <Container align="center">
      <Container>
        <Container>
          <Text variant="h1">Container</Text>
          <Text variant="h5">
            Flex system used to create complex layouts.&nbsp;
            <Link href="/storybook/select/play">Try it yourself!</Link>
          </Text>
        </Container>
        {data.map((e) => (
          <React.Fragment key={uuid()}>
            <Container row justify="space-between">
              {e.optional ? (
                <Container gap={0} row justify="flex-start">
                  <Text variant="h4">{e.prop}</Text>
                  <Text variant="small">&nbsp;(Optional)</Text>
                </Container>
              ) : (
                <Text variant="h4">{e.prop}</Text>
              )}
              <Spacer size="large" />
              <InlineCode>{e.types.join(' | ')}</InlineCode>
            </Container>
          </React.Fragment>
        ))}
      </Container>
    </Container>
  );
};
