const vars = {
  typographyPrimary: '--typography-primary',
};

const cvar = (key: keyof typeof vars): string => `var(${vars[key]})`;

const colors = {
  '--default': { light: '#fff', dark: '#000' },
  '--default-inverted': { light: '#000', dark: '#fff' },
  '--grey': { light: '#424242', dark: '#d1d5da' },
  '--grey-inverted': { light: '#d1d5da', dark: '#424242' },
  '--error-light': { light: 'rgba(255,0,0,0.68)', dark: 'rgba(255,0,0,0.68)' },
  '--error': { light: 'rgba(255,0,0,1)', dark: 'rgba(255,0,0,1)' },
  '--toggle-bg': { light: '#eaeaea', dark: '#333333' },
  '--pink': { light: '#f81ce5', dark: '#f81ce5' },
  '--transparent': { light: 'transparent', dark: 'transparent' },
};

export default {
  colors,
  cvar,
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
    radius: '5px',
  },
};
