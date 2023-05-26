import { createTheme, darken, lighten, ThemeOptions } from "@mui/material";

export const ColorPalette = {
  ident: "#075bfa",

  semantic: {
    red: "#e81546",
    yellow: "#ffee00",
    green: "#2cd96f",
    blue: "#518cfb",
  },

  cyan: { base: "#03b9b6", darker: "#008288", lighter: "#00e8e0" },
  magenta: { base: "#ed1979", darker: "#a60142", lighter: "#fe85a4" },
  purple: { base: "#9547d4", darker: "#6b05c4", lighter: "#bf6eff" },
  orange: { base: "#ffce00", darker: "#ff9300", lighter: "#ffee00" },

  white: "#fff",
  black: "#000",

  silver: {
    base: "#e7e7e8",
    darker20: darken("#e7e7e8", 0.2),
    darker40: darken("#e7e7e8", 0.4),
    lighter20: lighten("#e7e7e8", 0.2),
    lighter40: lighten("#e7e7e8", 0.4),
    lighter60: lighten("#e7e7e8", 0.6),
    lighter80: lighten("#e7e7e8", 0.8),
  },
  grey: {
    base: "#636871",
    darker20: darken("#636871", 0.2),
    darker40: darken("#636871", 0.4),
    lighter20: lighten("#636871", 0.2),
    lighter40: lighten("#636871", 0.4),
  },

  gradient: {
    academy: "linear-gradient(to right top, #8800FF,#3E45FF, #23C6E3)",
    hrs: "linear-gradient(137deg,#0d9ce0,#10bdde 45%,#13dfdc 90%)",
    talent: "linear-gradient(to right top, #F050A7,#8800FF, #3e45ff)",
  },

  product: {
    adac: { primary: "#FFCB00", secondary: "#309ED6" },
    oneHaufe: {
      primary: "#075bfa",
      secondary: "#9547d4",
    },
    semigator: { primary: "#075bfa", secondary: "#13dfdc" },
  },
};

const BREAKPOINTS_DEFAULT = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1170,
  xl: 1920,
};

export const theme: ThemeOptions = createTheme({
  breakpoints: {
    values: BREAKPOINTS_DEFAULT,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
        message: {
          fontWeight: 700,
        },
        filledError: {
          backgroundColor: ColorPalette.semantic.red,
        },
        filledWarning: {
          backgroundColor: ColorPalette.semantic.yellow,
        },
        filledInfo: {
          backgroundColor: ColorPalette.semantic.blue,
        },
        filledSuccess: {
          backgroundColor: ColorPalette.semantic.green,
        },
        standardError: {
          backgroundColor: lighten(ColorPalette.semantic.red, 0.9),
          color: ColorPalette.semantic.red,
        },
        standardWarning: {
          backgroundColor: lighten(ColorPalette.semantic.yellow, 0.9),
          color: darken(ColorPalette.semantic.yellow, 0.4),
        },
        standardInfo: {
          backgroundColor: lighten(ColorPalette.semantic.blue, 0.9),
          color: ColorPalette.semantic.blue,
        },
        standardSuccess: {
          backgroundColor: lighten(ColorPalette.semantic.green, 0.9),
          color: darken(ColorPalette.semantic.green, 0.3),
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: ColorPalette.white,
          color: ColorPalette.ident,
        },
        root: {
          boxShadow: "6px 0 16px 0 rgb(0 0 0 / 16%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          padding: "10px 30px",
          textTransform: "none",
          "&.Mui-disabled": {
            cursor: "not-allowed",
            pointerEvents: "auto",
          },
        },
        containedPrimary: {
          backgroundColor: ColorPalette.product.oneHaufe.primary,
          color: "#fff",
          "&:hover": {
            backgroundColor: darken(ColorPalette.product.oneHaufe.primary, 0.2),
          },
        },
        containedSecondary: {
          backgroundColor: ColorPalette.product.oneHaufe.secondary,
          color: "#fff",
          "&:hover": {
            backgroundColor: darken(
              ColorPalette.product.oneHaufe.secondary,
              0.2
            ),
          },
        },
        containedSizeLarge: {
          padding: "12px 40px",
        },
        outlined: {
          padding: "10px 30px",
        },
        outlinedSecondary: {
          border: `1px solid ${ColorPalette.ident}`,
          color: ColorPalette.ident,
          "&:hover": {
            borderColor: darken(ColorPalette.ident, 0.2),
            color: darken(ColorPalette.ident, 0.2),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "0 3px 8px 0 rgba(0,0,0,0.1)",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "@media (min-width: 600px)": {
            padding: 30,
          },
          "&:last-child": {
            "@media (min-width: 600px)": {
              paddingBottom: 30,
            },
            paddingBottom: 20,
          },
          padding: 20,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          "@media (min-width: 600px)": {
            paddingLeft: 16,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontWeight: 700,
          lineHeight: 1.2,
        },
        root: {
          borderRadius: 3,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        img: {
          maxWidth: "100%",
          height: "auto",
          padding: 0,
          margin: 0,
        },
        pre: {
          marginBottom: "34px",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: { minWidth: 40 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.12)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingLeft: 10,
        },
      },
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiTableCell: {
      styleOverrides: {
        footer: {
          borderBottom: "none",
        },
        head: {
          fontWeight: 600,
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        gutters: {
          paddingLeft: 10,
          paddingRight: 10,
          [`@media (min-width:${BREAKPOINTS_DEFAULT.sm}px)`]: {
            paddingLeft: 10,
            paddingRight: 10,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 30,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
  palette: {
    primary: {
      main: ColorPalette.ident,
    },
    secondary: {
      main: ColorPalette.purple.base,
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 10,
  typography: {
    fontFamily: 'Roboto, "Open Sans", Arial',
    h1: {
      "@media (min-width: 600px)": {
        fontSize: 45,
      },
      fontWeight: 700,
      fontSize: 30,
      marginBottom: 0,
      overflowWrap: "break-word",
    },
    h2: {
      fontSize: 22,
      marginBottom: 0,
      overflowWrap: "break-word",
    },
    h3: {
      "@media (min-width: 600px)": {
        fontSize: 20,
      },
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.4,
      marginBottom: 0,
      overflowWrap: "break-word",
    },
    overline: {
      lineHeight: 1.75,
      textTransform: "none",
    },
    subtitle1: {
      fontWeight: 700,
    },
  },
  zIndex: {
    appBar: 1210,
  },
});
