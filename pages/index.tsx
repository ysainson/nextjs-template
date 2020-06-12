import React, { useState } from 'react';

import { Container } from '@components/Layouts';
import { Button, Select } from '@components/Inputs';
import { useTheme } from '@contexts/ThemeContext';

export default (): JSX.Element => {
  const [, setSelected] = useState();

  const options = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
  ];

  return (
    <Container align="center" justify="stretch">
      <Button variant="secondary" onClick={useTheme()[1]}>
        Switch Theme
      </Button>
      <Select size="long" options={options} onSelect={setSelected} />
    </Container>
  );
};
