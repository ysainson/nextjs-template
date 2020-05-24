import theme from 'styled-theming';

export default {
  color: {
    background: theme('mode', { light: '#ffffff', dark: '#000000' }),
  },
};
