import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return <>
   <Head>
      <title>My Computer Universe</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>;
}
