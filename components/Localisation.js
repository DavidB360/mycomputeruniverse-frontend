import styles from '../styles/Localisation.module.css';
import Link from 'next/link';

function Localisation() {

    return (
        <main className={styles.main}>

            <Link href="/">
                <img 
                    src="/images/logo_MCU.webp" 
                    alt="logo de My Computer Universe composé d'une tour d'ordinateur renfermant une planète et coiffée d'un astronaute" 
                    className={styles.logo}
                    title="retour à l'accueil"
                />
            </Link>

            <header className={styles.header}>
                <h1>Pour trouver <strong>My Computer Universe</strong> c'est facile :</h1>
            </header>

            <div className={styles.container}>
                <img 
                    src="/images/stellar-map.webp" 
                    alt="tout droit puis à gauche et c'est la 3ème planète après Saturne" 
                    className={styles.map}
                />
            </div>

        </main>
    );
}

export default Localisation;