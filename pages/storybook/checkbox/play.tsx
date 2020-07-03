import React, { useState } from 'react';
import { Check, X, Plus, Minus } from 'react-feather';
import Head from 'next/head';

import { Container, Spacer } from '@components/Layouts';
import { InlineCode, Text } from '@components/DataDisplay';
import { Checkbox, Select, Toggle } from '@components/Inputs';

export default (): JSX.Element => {
  const [disabled, setDisabled] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element>(<Check />);

  const iconsList = [
    { value: <Check />, label: 'Default Icon' },
    { value: <X />, label: 'Cross Icon' },
    { value: <Plus />, label: 'Plus Icon' },
    { value: <Minus />, label: 'Minus Icon' },
  ];

  return (
    <>
      <Head>
        <title>Playground - Checkbox</title>
      </Head>
      <Container align="center">
        <Container>
          <Container gap={0}>
            <Text variant="h1">Playground</Text>
            <Text variant="h5">
              Play with
              <InlineCode>Checkbox</InlineCode>
              component.
            </Text>
          </Container>
          <Container gap={0} align="stretch">
            <Text variant="h3">Props</Text>
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
            <Container row gap={0}>
              <Container gap={0}>
                <Text variant="small" bold>
                  icon
                </Text>
              </Container>
              <Select
                selected={iconsList[0]}
                options={iconsList}
                onSelect={setSelectedIcon}
              />
            </Container>
          </Container>
          <Spacer size="small" />
          <Container gap={0} align="flex-start">
            <Text variant="h3">Result</Text>
            <Checkbox disabled={disabled} icon={selectedIcon} />
          </Container>
        </Container>
      </Container>
    </>
  );
};
