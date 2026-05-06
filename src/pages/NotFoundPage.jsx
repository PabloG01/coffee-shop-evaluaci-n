import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>¡Ups! Esta página no existe.</p>
        <p className={styles.sub}>Quizás buscabas nuestro menú o información del desarrollador.</p>
        <Link to="/" className={styles.homeLink}>Volver al inicio</Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
