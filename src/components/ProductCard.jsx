import styles from './ProductCard.module.css';

const ProductCard = ({ name, description, price, image }) => {
    return (
        <article className={styles.card}>
            <img src={image} alt={name} className={styles.cardImage} />
            <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{name}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <span className={styles.cardPrice}>{price}</span>
            </div>
        </article>
    );
};

export default ProductCard;