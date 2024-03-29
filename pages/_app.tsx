import { EmptyLayout } from "@/components/layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppPropsWithLayout } from "../models";
import { SWRConfig } from "swr";
import axiosClient from "@/api/axiosClient";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
export default MyApp;
