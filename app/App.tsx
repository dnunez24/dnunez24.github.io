/* eslint-disable react/jsx-props-no-spreading */
import type { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Typography } from "@material-ui/core";
import { AppThemeProvider } from "./AppThemeProvider";

const mdxComponents = {
  h1: (props) => <Typography variant="h1" gutterBottom {...props} />,
  h2: (props) => <Typography variant="h2" gutterBottom {...props} />,
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  h5: (props) => <Typography variant="h5" {...props} />,
  h6: (props) => <Typography variant="h6" {...props} />,
  p: (props) => <Typography variant="body1" paragraph {...props} />,
};

const App: FC = ({ children }) => (
  <MDXProvider components={mdxComponents}>
    <AppThemeProvider>{children}</AppThemeProvider>
  </MDXProvider>
);

export { App };
