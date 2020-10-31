import type { FC } from "react";
import Head from "next/head";
import { Grid } from "@material-ui/core";

interface PageLayoutProps {
  title: string;
}

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => (
  <Grid container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Grid container component="header" />
    <Grid container component="main">
      {children}
    </Grid>
  </Grid>
);
