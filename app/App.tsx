/* eslint-disable react/jsx-props-no-spreading */
import type { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Typography } from "@material-ui/core";
import { AppThemeProvider } from "./AppThemeProvider";

const Heading1: FC = (props) => (
  <Typography variant="h1" gutterBottom {...props} />
);
const Heading2: FC = (props) => (
  <Typography variant="h2" gutterBottom {...props} />
);
const Heading3: FC = (props) => <Typography variant="h3" {...props} />;
const Heading4: FC = (props) => <Typography variant="h4" {...props} />;
const Heading5: FC = (props) => <Typography variant="h5" {...props} />;
const Heading6: FC = (props) => <Typography variant="h6" {...props} />;
const Paragraph: FC = (props) => (
  <Typography variant="body1" paragraph {...props} />
);

const mdxComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Paragraph,
};

const App: FC = ({ children }) => (
  <MDXProvider components={mdxComponents}>
    <AppThemeProvider>{children}</AppThemeProvider>
  </MDXProvider>
);

export { App };
