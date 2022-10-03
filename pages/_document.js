import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href='http://fonts.googleapis.com/css?family=Playfair+Display:400,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'/>
	<link href='http://fonts.googleapis.com/css?family=Josefin+Sans:400,100,300,300italic,100italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'/>
	<link href='http://fonts.googleapis.com/css?family=Oswald:400,700,300' rel='stylesheet' type='text/css'/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
