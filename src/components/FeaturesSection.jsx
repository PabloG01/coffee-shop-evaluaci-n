import { useState, useEffect } from 'react';
import styles from './FeaturesSection.module.css';
import FeatureCard from './FeatureCard';
import iconOrigin from '../assets/icon-origin.png';
import iconBarista from '../assets/icon-barista.png';
import iconAmbient from '../assets/icon-ambient.png';

const features = [
    {
        id: 1,
        icon: iconOrigin,
        title: 'Café de Origen',
        description: 'Trabajamos con productores de la mejor calidad para obtener los mejores sabores.'
    },
    {
        id: 2,
        icon: iconBarista,
        title: 'Baristas Expertos',
        description: 'Nuestro equipo está entrenado para preparar cada taza a la perfección.'
    },
    {
        id: 3,
        icon: iconAmbient,
        title: 'Ambiente Acogedor',
        description: 'Un espacio diseñado para que te sientas como en casa mientras disfrutas de tu bebida favorita.'
    }
];

const FeaturesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNext, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>¿Por qué elegirnos?</h2>
            <p className={styles.sectionSubtitle}>Más que café, una experiencia</p>

            <div className={styles.carouselWrapper}>
                <button className={styles.arrowBtn} onClick={goToPrev} aria-label="Anterior">
                    &#8249;
                </button>

                <div className={styles.carouselTrack}>
                    <FeatureCard
                        key={features[currentIndex].id}
                        icon={features[currentIndex].icon}
                        title={features[currentIndex].title}
                        description={features[currentIndex].description}
                    />
                </div>

                <button className={styles.arrowBtn} onClick={goToNext} aria-label="Siguiente">
                    &#8250;
                </button>
            </div>

            <div className={styles.dots}>
                {features.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ir a la diapositiva ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;