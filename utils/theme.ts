import theme from 'styled-theming';

export default {
  color: {
    background: theme('mode', { light: '#ffffff', dark: '#000000' }),
    text: theme('mode', { light: '#000000', dark: '#ffffff' }),
  },
  typography: {
    h1: { size: '3em', weight: 'bold' },
    h2: { size: '2.25em', weight: 600 },
    h3: { size: '1.5em', weight: 600 },
    h4: { size: '1.25em', weight: 600 },
    h5: { size: '1em', weight: 600 },
    h6: { size: '0.875em', weight: 600 },
    p: { size: '0.875em', weight: 600 },
    small: { size: '0.875em', weight: 'normal' },
  },
  layout: {
    gap: '4px',
  },
};
