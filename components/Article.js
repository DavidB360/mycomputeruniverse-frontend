import styles from '../styles/Article.module.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function Article(props) {

    return (
        <div className={styles.articleContainer}>

            <span className={styles.price}>{props.article.price + " €"}</span>

            <img src={props.article.pic} alt={"image du produit" + props.article.name} />

            <h3>{props.article.name}</h3>

            { props.article.isAvailable ?
                <div 
                    className={styles.addBtn}
                    onClick={() => props.addToCart(props.article)}
                    title="Ajouter au panier"
                >
                    <FontAwesomeIcon icon={faPlusCircle} />
                </div>
                :
                <span className={styles.notAvailable}>Rupture de stock</span>
            }

        </div>
    );

}

export default Article;