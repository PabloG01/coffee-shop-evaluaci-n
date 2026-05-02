import styles from './Navbar.module.css';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logoImg} alt="Brew Haven Logo" className={styles.logoImage} />
                <h1 className={styles.logoText}>Brew Haven</h1>
            </div>
            <ul className={styles.links}>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#menu">Menú</a></li>
                <li><a href="#about">Nosotros</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;