import React, { useRef } from 'react';

import {
  StyledSlider,
  StyledSliderMainBar,
  StyledSliderSecondBar,
  StyledSliderThumb,
} from './style';

export default (): JSX.Element => {
  return (
    <StyledSlider>
      <StyledSliderMainBar />
      <StyledSliderSecondBar />
      <input type="hidden" value={23} />
      <StyledSliderThumb
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={23}
        onDrag={(): void => {}}
      />
    </StyledSlider>
  );
};
