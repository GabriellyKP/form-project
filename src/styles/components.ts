import { Components } from "@mui/material";
import { pxToRem } from "./muiTheme";

export const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "initial",
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: {
        "& input[type=number]": {
          MozAppearance: "textfield",
        },
        "& input[type=number]::-webkit-outer-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        maxWidth: pxToRem(200),
      },
    },
  },
} as Components;
