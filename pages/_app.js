import "@/css/bootstrap.min.css";
import "@/css/style.css";
import '../styles/globals.css'
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <NextNProgress color="#e00000" options={{ showSpinner: false }} />
      <Component {...pageProps} key={router.asPath} />
    </>
  );
}

export default MyApp
