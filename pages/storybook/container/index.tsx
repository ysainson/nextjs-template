import React from 'react';

import { Documentation } from '@components/Storybook';

const ContainerStorybook = (): JSX.Element => {
  const flexContent = [
    '"flex-start"',
    '"flex-end"',
    '"space-around"',
    '"space-evenly"',
    '"space-between"',
    '"stretch"',
    '"center"',
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
    <Documentation
      title="Container"
      description="Flex system used to create complex layouts."
      playgroundLink="/storybook/container/play"
      data={data}
    />
  );
};

export default ContainerStorybook;
