import type { FC } from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

const openSansFontFamily = "OpenSans, sans-serif";
const oswaldFontFamily = "Oswald, sans-serif";

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#F8A055",
      light: "#FFD184",
      dark: "#F18950",
    },
    secondary: {
      main: "#FA6E59",
      light: "#FFA086",
      dark: "#C13D2F",
    },
  },
  typography: {
    fontFamily: openSansFontFamily,
    h1: {
      fontFamily: oswaldFontFamily,
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: oswaldFontFamily,
      fontSize: "2.125rem",
    },
    h3: {
      fontFamily: oswaldFontFamily,
    },
    h4: {
      fontFamily: oswaldFontFamily,
    },
    h5: {
      fontFamily: oswaldFontFamily,
    },
    h6: {
      fontFamily: openSansFontFamily,
    },
  },
});
const theme = responsiveFontSizes(baseTheme);

const AppThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { AppThemeProvider };
