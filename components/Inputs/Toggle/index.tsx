import * as React from 'react';

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
  const [isToggled, setToggled] = React.useState(toggled);

  const handleClick = React.useCallback(() => {
    setToggled(!isToggled);
    onChange();
  }, [isToggled, onChange]);

  React.useEffect(() => {
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
