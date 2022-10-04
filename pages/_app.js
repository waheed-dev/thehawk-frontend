import "@/css/bootstrap.min.css";
import "@/css/style.css";
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextNProgress color="#e00000"  />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
