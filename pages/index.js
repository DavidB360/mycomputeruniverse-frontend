import Head from "next/head";
import Home from '../components/Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>My Computer Universe - Accueil</title>
        <meta name="description" content="Le site de vente des composants informatiques d'exception" />
      </Head>
      <Home />
    </>
  );
}
