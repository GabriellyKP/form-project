import { TypographyOptions } from "@mui/material/styles/createTypography";

import { pxToRem } from "./muiTheme";

export const typography = {
  fontFamily: "'Open Sans', sans-seriff",

  h1: {
    fontSize: pxToRem(96),
  },

  h2: {
    fontSize: pxToRem(60),
  },

  h3: {
    fontSize: pxToRem(48),
  },

  h4: {
    fontSize: pxToRem(34),
  },

  h5: {
    fontSize: pxToRem(24),
  },

  h6: {
    fontSize: pxToRem(20),
  },

  subtitle1: {
    fontSize: pxToRem(16),
  },

  subtitle2: {
    fontSize: pxToRem(14),
  },

  body1: {
    fontSize: pxToRem(16),
  },

  body2: {
    fontSize: pxToRem(14),
  },

  overline: {
    fontSize: pxToRem(12),
  },
} as TypographyOptions;
