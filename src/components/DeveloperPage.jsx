// src/components/DeveloperPage.jsx
import styles from './DeveloperPage.module.css';
import developerPhoto from '../assets/developer.jpg';

const DeveloperPage = ({ name, career, description, github, techs }) => {
    return (
        <main className={styles.page}>
            <div className={styles.card}>
                <img
                    src={developerPhoto}
                    alt={`Foto de ${name}`}
                    className={styles.photo}
                />
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.career}>{career}</p>
                <p className={styles.description}>{description}</p>
                <hr className={styles.divider} />
                <p className={styles.techTitle}>Tecnologías usadas</p>
                <ul className={styles.techList}>
                    {techs.map((tech, index) => (
                        <li key={index} className={styles.techBadge}>{tech}</li>
                    ))}
                </ul>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                >
                    Ver GitHub
                </a>
            </div>
        </main>
    );
};

export default DeveloperPage;
