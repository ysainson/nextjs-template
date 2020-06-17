import React from 'react';

import { uuid } from '@utils';

import { Container, Spacer } from '@components/Layouts';
import { Button } from '@components/Inputs';
import { Text, Link, InlineCode } from '@components/DataDisplay';

type Variant = 'primary' | 'secondary';
type Size = 'short' | 'medium' | 'long';
type Thickness = 'small' | 'medium' | 'large';

export default (): JSX.Element => {
  const data = [
    { prop: 'children', types: ['string'] },
    { prop: 'variant', types: ['"primary"', '"secondary"'], optional: true },
    { prop: 'size', types: ['"short"', '"medium"', '"long"'], optional: true },
    {
      prop: 'thickness',
      types: ['"small"', '"medium"', '"large"'],
      optional: true,
    },
    { prop: 'disabled', types: ['boolean'], optional: true },
    { prop: 'gap', types: ['0 - 8'], optional: true },
    { prop: 'onClick', types: ['() => void'], optional: true },
  ];

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
                    <Button
                      key={uuid()}
                      variant={
                        e.prop === 'variant' ? (t as Variant) : 'secondary'
                      }
                      size={e.prop === 'size' ? (t as Size) : undefined}
                      thickness={
                        e.prop === 'thickness' ? (t as Thickness) : undefined
                      }
                      disabled={e.prop === 'disabled'}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </Button>
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
