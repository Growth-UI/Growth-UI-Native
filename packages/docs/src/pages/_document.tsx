import appName from "../../app.json";
import Document, { DocumentContext, Main } from "next/document";
import React from "react";
import { AppRegistry } from "react-native";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent(appName.name, () => Main);

    const sheet = new ServerStyleSheet();
    const { getStyleElement } = (AppRegistry as any).getApplication(appName.name);
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {getStyleElement()}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
