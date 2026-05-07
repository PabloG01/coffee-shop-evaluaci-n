import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logoImg} alt="Brew Haven Logo" className={styles.logoImage} />
                <Link to="/" className={styles.logoText}>Brew Haven</Link>
            </div>
            <ul className={styles.links}>
                <li><Link to="/">Inicio</Link></li>
                <li><a href="#menu">Menú</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;  