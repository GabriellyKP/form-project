import { createTheme, responsiveFontSizes } from '@mui/material';

import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

function pxToRem(size: number): string {
  return `${size * 0.0625}rem`;
}

const theme = createTheme({
  palette,
  typography,
  components,
});

responsiveFontSizes(theme);
export { theme, pxToRem };
