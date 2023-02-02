import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { RootStoreProvider } from "@mobx";
import Layout from "@components/Layout";
import { UserProvider } from "@components/Context/UserContext";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <RootStoreProvider>
                <UserProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </UserProvider>
            </RootStoreProvider>
        </ChakraProvider>
    );
}

export default MyApp;
