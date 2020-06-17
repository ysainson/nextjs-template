import React from 'react';

import { uuid } from '@utils';

import { Container, Spacer } from '@components/Layouts';
import { Select } from '@components/Inputs';
import { InlineCode, Link, Text } from '@components/DataDisplay';

type Size = 'short' | 'medium' | 'long';
type Thickness = 'small' | 'medium' | 'large';

export default (): JSX.Element => {
  const data = [
    { prop: 'options', types: ['Option<T>[]'] },
    { prop: 'onSelect', types: ['(value: T) => void'] },
    { prop: 'selected', types: ['Option<T>'] },
    { prop: 'text', types: ['string'], optional: true },
    { prop: 'size', types: ['"short"', '"medium"', '"long"'], optional: true },
    {
      prop: 'thickness',
      types: ['"small"', '"medium"', '"large"'],
      optional: true,
    },
    { prop: 'disabled', types: ['boolean'], optional: true },
    { prop: 'error', types: ['boolean'], optional: true },
    { prop: 'gap', types: ['0 - 8'], optional: true },
  ];

  const options = [
    { value: 'One', label: 'Element 1' },
    { value: 'Two', label: 'Element 2' },
    { value: 'Three', label: 'Element 3' },
  ];

  return (
    <Container align="center">
      <Container>
        <Container>
          <Text variant="h1">Select</Text>
          <Text variant="h5">
            Display a dropdown list of items.&nbsp;
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
            {e.types.length > 1 && (
              <Container gap={0} row justify="flex-start">
                {e.types.map((type) => {
                  const t = type.replace(new RegExp('"', 'g'), '');
                  return (
                    <Select
                      key={uuid()}
                      options={options}
                      onSelect={(): void => {}}
                      size={e.prop === 'size' ? (t as Size) : undefined}
                      thickness={
                        e.prop === 'thickness' ? (t as Thickness) : undefined
                      }
                      disabled={e.prop === 'disabled'}
                    />
                  );
                })}
              </Container>
            )}
            {e.types.length > 1 && <Spacer size="small" />}
          </React.Fragment>
        ))}
      </Container>
    </Container>
  );
};
