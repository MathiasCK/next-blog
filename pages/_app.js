import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification.context";
import "../styles/globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
};

export default MyApp;
