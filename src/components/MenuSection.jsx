import styles from './MenuSection.module.css';
import ProductCard from './ProductCard';
import products from '../data/products';

const MenuSection = () => {
    return (
        <section id="menu" className={styles.section}>
            <h2 className={styles.sectionTitle}>Nuestro Menú</h2>
            <p className={styles.sectionSubtitle}>Seleccionado con pasión, preparado con amor</p>
            <div className={styles.cardsContainer}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;