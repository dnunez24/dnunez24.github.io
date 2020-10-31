import type { FC } from "react";
import { AppThemeProvider } from "./AppThemeProvider";

const App: FC = ({ children }) => (
  <AppThemeProvider>{children}</AppThemeProvider>
);

export { App };
