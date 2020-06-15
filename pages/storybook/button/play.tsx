import React, { useState } from 'react';

import { Container, Spacer } from '@components/Layouts';
import { InlineCode, Link, Text } from '@components/DataDisplay';
import { Button, Select, Toggle } from '@components/Inputs';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'short' | 'medium' | 'long';
type ButtonThickness = 'small' | 'medium' | 'large';

export default (): JSX.Element => {
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
    <Container align="center">
      <Container>
        <Container>
          <Text variant="h1">Playground</Text>
          <Text variant="h5">
            Play with
            <InlineCode>Button</InlineCode>
            component.
          </Text>
        </Container>
        <Spacer size="large" />
        <Container row gap={0} align="flex-start">
          <Container align="center" gap={0}>
            <Text variant="small" bold>
              Variant
            </Text>
            <Select
              text={variantOptions[0].label}
              options={variantOptions}
              onSelect={setVariant}
            />
          </Container>
          <Container align="center" gap={0}>
            <Text variant="small" bold>
              Size
            </Text>
            <Select
              text={sizeOptions[1].label}
              options={sizeOptions}
              onSelect={setSize}
            />
          </Container>
          <Container align="center" gap={0}>
            <Text variant="small" bold>
              Thickness
            </Text>
            <Select
              text={thicknessOptions[1].label}
              options={thicknessOptions}
              onSelect={setThickness}
            />
          </Container>
          <Spacer size="small" />
          <Container align="center" gap={0}>
            <Text variant="small" bold>
              Disabled
            </Text>
            <Toggle onChange={(): void => setDisabled(!disabled)} />
          </Container>
        </Container>
        <Spacer size="large" />
        <Spacer size="small" />
        <Container align="center">
          <Link href="/storybook/button">
            <Button
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
  );
};
