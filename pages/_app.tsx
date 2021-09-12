import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import ContactProvider from "../context";
import theme from "../theme";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Contact</title>
      </Head>
      <ContactProvider>
        <Component {...pageProps} />
      </ContactProvider>
    </ChakraProvider>
  );
}
export default App;
