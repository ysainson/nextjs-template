import React, { useState } from 'react';
import Head from 'next/head';

import { Container, Spacer } from '@components/Layouts';
import { InlineCode, Link, Text } from '@components/DataDisplay';
import { Button, Select, Toggle } from '@components/Inputs';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'short' | 'medium' | 'long';
type ButtonThickness = 'small' | 'medium' | 'large';

const ButtonStorybookPlay = (): JSX.Element => {
  const [variant, setVariant] = useState<ButtonVariant>('primary');
  const [size, setSize] = useState<ButtonSize>('medium');
  const [thickness, setThickness] = useState<ButtonThickness>('medium');
  const [disabled, setDisabled] = useState(false);

  const variantOptions = [
    { value: 'primary' as ButtonVariant, label: 'Primary' },
    { value: 'secondary' as ButtonVariant, label: 'Secondary' },
  ];

  const sizeOptions = [
    { value: 'short' as ButtonSize, label: 'Short' },
    { value: 'medium' as ButtonSize, label: 'Medium' },
    { value: 'long' as ButtonSize, label: 'Long' },
  ];

  const thicknessOptions = [
    { value: 'small' as ButtonThickness, label: 'Small' },
    { value: 'medium' as ButtonThickness, label: 'Medium' },
    { value: 'large' as ButtonThickness, label: 'Large' },
  ];

  return (
    <>
      <Head>
        <title>Playground - Button</title>
      </Head>
      <Container align="center">
        <Container>
          <Container gap={0}>
            <Text variant="h1">Playground</Text>
            <Text variant="h5">
              Play with
              <InlineCode>Button</InlineCode>
              component.
            </Text>
          </Container>
          <Container gap={0} align="stretch">
            <Text variant="h3">Props</Text>
            <Container row gap={0}>
              <Container gap={0}>
                <Text variant="small" bold>
                  variant
                </Text>
              </Container>
              <Select
                text={variantOptions[0].label}
                options={variantOptions}
                onSelect={setVariant}
              />
            </Container>
            <Container row justify="space-between" gap={0}>
              <Container gap={0}>
                <Text variant="small" bold>
                  size
                </Text>
              </Container>
              <Select
                text={sizeOptions[1].label}
                options={sizeOptions}
                onSelect={setSize}
              />
            </Container>
            <Container row justify="space-between" gap={0}>
              <Container gap={0}>
                <Text variant="small" bold>
                  thickness
                </Text>
              </Container>
              <Select
                text={thicknessOptions[1].label}
                options={thicknessOptions}
                onSelect={setThickness}
              />
            </Container>
            <Container row justify="space-between" gap={0}>
              <Container gap={0}>
                <Text variant="small" bold>
                  disabled
                </Text>
              </Container>
              <Container align="flex-end" gap={0}>
                <Toggle onChange={(): void => setDisabled(!disabled)} />
              </Container>
            </Container>
          </Container>
          <Spacer size="small" />
          <Container gap={0} align="flex-start">
            <Text variant="h3">Result</Text>
            <Link href="/storybook/button">
              <Button
                gap={0}
                variant={variant}
                size={size}
                thickness={thickness}
                disabled={disabled}
              >
                Go back
              </Button>
            </Link>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ButtonStorybookPlay;
