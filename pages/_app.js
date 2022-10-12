import "@/css/bootstrap.min.css";
import "@/css/style.css";
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextNProgress color="#e00000" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
