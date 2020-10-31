import type { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { App } from "app";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <App>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <CssBaseline />
    <Container maxWidth="lg">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Container>
  </App>
);

// eslint-disable-next-line import/no-default-export
export default CustomApp;
