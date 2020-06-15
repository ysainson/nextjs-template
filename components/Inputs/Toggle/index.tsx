import React, { useCallback, useState } from 'react';

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
export default ({ onChange, toggled = false }: ToggleProps): JSX.Element => {
  const [isToggled, setToggled] = useState(toggled);

  const handleClick = useCallback(() => {
    setToggled(!isToggled);
    onChange();
  }, [isToggled, onChange]);

  return (
    <Container>
      <StyledToggleWrapper onClick={handleClick}>
        <StyledToggle toggled={isToggled}>
          <StyledToggleContent toggled={isToggled} />
        </StyledToggle>
      </StyledToggleWrapper>
    </Container>
  );
};
