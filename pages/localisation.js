import Head from "next/head";
import Localisation from '../components/Localisation';

export default function AddressPage() {
  return (
    <>
      <Head>
        <title>My Computer Universe - Adresse</title>
        <meta name="description" content="Plan pour trouver notre boutique" />
      </Head>
      <Localisation />
    </>
  );
}
