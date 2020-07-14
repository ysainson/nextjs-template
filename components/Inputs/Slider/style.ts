import styled from 'styled-components';

import { theme } from '@utils';

export const StyledSlider = styled.span`
  // Style
  border-radius: calc(${theme.layout.radius} * 3);

  // Layout
  width: 500px;
  height: 12px;
  position: relative;
`;
export const StyledSliderMainBar = styled.span`
  // Style
  background-color: red;
  border-radius: inherit;

  // Layout
  width: 100%;
  height: inherit;
  position: absolute;
`;

export const StyledSliderSecondBar = styled.span`
  // Style
  background-color: blue;
  border-radius: inherit;

  // Layout
  width: 32%;
  height: inherit;
  position: absolute;
`;

export const StyledSliderThumb = styled.span`
  // Style
  background-color: black;
  border-radius: 50%;

  // Layout
  width: 20px;
  height: 20px;
  position: absolute;
`;
