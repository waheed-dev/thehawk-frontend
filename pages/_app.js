import "@/css/bootstrap.min.css";
import "@/css/style.css";
import "../styles/globals.css";
import "react-responsive-modal/styles.css";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Layout from "../layout";
import { useEffect } from "react";
import * as ga from "@/components/common/lib/Analytics";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const handelChangeAds = () => {
      const AvailableAdds = document.getElementsByClassName("adsbygoogle");
      let valueAddsNumber = 0;

      for (var index = 0; index < AvailableAdds.length; index++) {
        const element = AvailableAdds[index];

        if (element.hasChildNodes() === false) {
          valueAddsNumber = valueAddsNumber + 1;
        }
      }

      for (var i = 0; i < valueAddsNumber; i++) {
        try {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-9084918379047887",
          });
        } catch (e) {
          console.error(e);
        }
      }
    };

    router.events.on("routeChangeComplete", handelChangeAds);
    router.events.on("hashChangeComplete", handelChangeAds);
    return () => {
      router.events.off("routeChangeComplete", handelChangeAds);
      router.events.off("hashChangeComplete", handelChangeAds);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9084918379047887"
        crossorigin="anonymous"
        id="googleAddScript"
      ></Script>
      <NextNProgress color="#e00000" options={{ showSpinner: false }} />
      <Layout>
        <Component {...pageProps} key={router.asPath} />
        <ToastContainer
          style={{
            zIndex: 999999999999,
          }}
          position={"top-center"}
        />
      </Layout>
    </>
  );
}

export default MyApp;
