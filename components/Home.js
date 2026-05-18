import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Article from '../components/Article';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Home() {

    const articles = [
        {
            id: "0",
            name: "Précieuse mémoire DDR5",
            pic: "/images/golden_memory.webp",
            isAvailable: true,
            price: 100000
        },
        {
            id: "1",
            name: "SSD du temps perdu",
            pic: "/images/ghost_ssd.webp",
            isAvailable: false,
            price: 100
        },
        {   
            id: "2",
            name: "CPU à refroidissement nucléaire",
            pic: "/images/crazy_heat_sink.webp",
            isAvailable: true,
            price: 1000
        },
        {   
            id: "3",
            name: "boîtier moyen tour Minecraft",
            pic: "/images/minecraft_computer_case.webp",
            isAvailable: true,
            price: 150
        }
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (article) => {
        setCart([...cart, article]);
    };

    const removeFromCart = (index) => {
        setCart(cart.filter(e => cart.indexOf(e) !== index));
    }

    const bill = cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price, 0
    );

    const displayedArticles = articles.map((e, i) => {
        return (
            <Article article={e} addToCart={addToCart} key={'Article ' + i} />
        );
    });

    const displayedCart = cart.map((e, i) => {
        return (
            <tr className={styles.cartItem} key={'item ' + i}>
                <td className={styles.cartItemName}>{e.name}</td>
                <td className={styles.cartItemPrice}>{e.price + "€"}</td>
                <td>
                    <div 
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(i)}
                        title="Retirer l'article du panier"
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                </td>
            </tr>
        );
    });

    return (
        <main className={styles.main}>

            <header className={styles.header}>
            <img 
                src="/images/logo_MCU.webp" 
                alt="logo de My Computer Universe composé d'une tour d'ordinateur renfermant une planète et coiffée d'un astronaute" 
                className={styles.logo}
            />
                <h1>Bienvenue dans notre boutique<br /><strong>My Computer Universe</strong><br />high tech hardware from outter space</h1>
            </header>

            <div className={styles.container}>

                <section className={styles.articles}>
                    <h2>Articles</h2>
                    <div className={styles.articlesList}>
                        {displayedArticles}
                    </div> 
                </section>

            </div>

            <aside className={styles.cart}>
                <h2>Panier</h2>
                <span className={styles.bill}>{'Total : ' + bill + ' €'}</span>
                <table className={styles.cartContent}>
                    {displayedCart}
                </table>
            </aside>

            <nav className={styles.navigation}>
                <Link href="/localisation">
                    <div className={styles.locationBtn}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span><span className={styles.locationBtnText}>Trouver</span> notre boutique</span>
                    </div>
                </Link>
            </nav>

        </main>
    );

}

export default Home;
