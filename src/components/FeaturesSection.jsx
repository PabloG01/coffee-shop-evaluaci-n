
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
    return (
        <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>¿Por qué elegirnos?</h2>
            <p className={styles.sectionSubtitle}>Más que café, una experiencia</p>
            <div className={styles.cardsContainer}>
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;