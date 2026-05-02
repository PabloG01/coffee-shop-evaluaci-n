import styles from './Hero.module.css';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section
            className={styles.heroContainer}
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h2 className={styles.title}>El sabor perfecto para tu día</h2>
                <p className={styles.subtitle}>
                    Descubre nuestra selección de granos tostados artesanalmente.
                    Un ambiente único para disfrutar de la mejor compañía y el mejor café de la ciudad.
                </p>
                <button className={styles.ctaButton}>Ver nuestro Menú</button>
            </div>
        </section>
    );
};
export default Hero;