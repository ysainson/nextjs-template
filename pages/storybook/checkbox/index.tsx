import React, { ReactNode } from 'react';

import { uuid } from '@utils';

import { Checkbox } from '@components/Inputs';
import { DataElement, Documentation } from '@components/Storybook';

const CheckboxStorybook = (): JSX.Element => {
  const data = [
    { prop: 'checked', types: ['boolean'], optional: true },
    { prop: 'disabled', types: ['boolean'], optional: true },
    { prop: 'icon', types: ['ReactNode'], optional: true },
  ];

  const getCheckbox = (_: string, e: DataElement): ReactNode => {
    return (
      <Checkbox
        key={uuid()}
        checked={e.prop === 'checked'}
        disabled={e.prop === 'disabled'}
      />
    );
  };

  return (
    <Documentation
      title="Checkbox"
      description="Displays a boolean value."
      playgroundLink="/storybook/checkbox/play"
      data={data}
      getComponent={getCheckbox}
    />
  );
};

export default CheckboxStorybook;
