import Context from "../components/Context";
import Head from "next/head";
import React, { useState } from "react";
import ThemeProvider from "@growth-ui/native/ThemeProvider";
import { AppProps } from "next/dist/shared/lib/router/router";
import { GrowthStyle } from "growth-ui-react";
import "setimmediate";

const globalStyle = `
  #__next {
    height: 100%;
  }

  input {
    outline: none;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Head>
        <title>Growth UI Native</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <Context.Provider
        value={{
          darkMode,
          setDarkMode,
        }}
      >
        <GrowthStyle darkMode={darkMode} globalStyle={globalStyle}>
          <ThemeProvider mode={darkMode ? "dark" : "light"}>
            <Component {...pageProps} />
          </ThemeProvider>
        </GrowthStyle>
      </Context.Provider>
    </>
  );
};

export default App;
