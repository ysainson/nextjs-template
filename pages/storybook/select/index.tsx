import React, { ReactNode } from 'react';

import { uuid } from '@utils';

import { Select } from '@components/Inputs';
import { DataElement, Documentation } from '@components/Storybook';

type Size = 'short' | 'medium' | 'long';
type Thickness = 'small' | 'medium' | 'large';

const SelectStorybook = (): JSX.Element => {
  const data = [
    { prop: 'options', types: ['Option<T>[]'] },
    { prop: 'onSelect', types: ['(value: T) => void'] },
    { prop: 'selected', types: ['Option<T>'] },
    { prop: 'text', types: ['string'], optional: true },
    {
      prop: 'size',
      types: ['"short"', '"medium"', '"long"'],
      optional: true,
    },
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

  const getSelect = (type: string, e: DataElement): ReactNode => {
    const t = type.replace(new RegExp('"', 'g'), '');
    return (
      <Select
        key={uuid()}
        options={options}
        onSelect={(): void => {}}
        size={e.prop === 'size' ? (t as Size) : undefined}
        thickness={e.prop === 'thickness' ? (t as Thickness) : undefined}
        disabled={e.prop === 'disabled'}
      />
    );
  };

  return (
    <Documentation
      title="Select"
      description="Display a dropdown list of items."
      playgroundLink="/storybook/select/play"
      data={data}
      getComponent={getSelect}
    />
  );
};

export default SelectStorybook;
