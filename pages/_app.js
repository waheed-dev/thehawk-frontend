import "@/css/bootstrap.min.css";
import "@/css/style.css";
import '../styles/globals.css'
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Layout from "../layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <NextNProgress color="#e00000" options={{ showSpinner: false }} />
      <Layout>
        
      <Component {...pageProps} key={router.asPath} />
           </Layout>
    </>
  );
}

export default MyApp
