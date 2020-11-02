import { Children } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext, DocumentInitialProps } from "next/document";
import { TagManagerScript } from "common/analytics";
import { ServerStyleSheets } from "@material-ui/core/styles";
import GoogleFonts from "next-google-fonts";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    // Render app and page and get the context of the page with collected side effects.
    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/jsx-props-no-spreading
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open Sans:wght@400;500&family=Oswald:wght@300;400;500;700&display=swap" />
        <Head>
          <TagManagerScript />
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
        </Head>
        <body>
          <noscript>
            <iframe
              title="gtm-noscript"
              src="https://www.googletagmanager.com/ns.html?id=GTM-TGDKSF5"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// eslint-disable-next-line import/no-default-export
export default MyDocument;
