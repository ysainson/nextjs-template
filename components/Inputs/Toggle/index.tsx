import React, { useCallback, useEffect, useState } from 'react';

import { Container } from '@components/Layouts';

import {
  StyledToggleProps,
  StyledToggleContent,
  StyledToggleWrapper,
  StyledToggle,
} from './style';

interface ToggleProps extends Partial<StyledToggleProps> {
  onChange: () => void;
}

const Toggle = ({ onChange, toggled = false }: ToggleProps): JSX.Element => {
  const [isToggled, setToggled] = useState(toggled);

  const handleClick = useCallback(() => {
    setToggled(!isToggled);
    onChange();
  }, [isToggled, onChange]);

  useEffect(() => {
    setToggled(toggled);
  }, [toggled]);

  return (
    <Container flex={0}>
      <StyledToggleWrapper onClick={handleClick}>
        <StyledToggle toggled={isToggled}>
          <StyledToggleContent toggled={isToggled} />
        </StyledToggle>
      </StyledToggleWrapper>
    </Container>
  );
};

export default Toggle;
