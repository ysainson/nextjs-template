import React, { ReactNode } from 'react';

import { uuid } from '@utils';

import { Button } from '@components/Inputs';
import { DataElement, Documentation } from '@components/Storybook';

type Variant = 'primary' | 'secondary';
type Size = 'short' | 'medium' | 'long';
type Thickness = 'small' | 'medium' | 'large';

const ButtonStorybook = (): JSX.Element => {
  const data = [
    { prop: 'children', types: ['string'] },
    { prop: 'variant', types: ['"primary"', '"secondary"'], optional: true },
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
    { prop: 'gap', types: ['0 - 8'], optional: true },
    { prop: 'onClick', types: ['() => void'], optional: true },
  ];

  const getButton = (type: string, e: DataElement): ReactNode => {
    const t = type.replace(new RegExp('"', 'g'), '');
    return (
      <Button
        key={uuid()}
        variant={e.prop === 'variant' ? (t as Variant) : 'secondary'}
        size={e.prop === 'size' ? (t as Size) : undefined}
        thickness={e.prop === 'thickness' ? (t as Thickness) : undefined}
        disabled={e.prop === 'disabled'}
      >
        {t.charAt(0).toUpperCase() + t.slice(1)}
      </Button>
    );
  };

  return (
    <Documentation
      title="Button"
      description="Used to trigger an operation."
      playgroundLink="/storybook/button/play"
      data={data}
      getComponent={getButton}
    />
  );
};

export default ButtonStorybook;
