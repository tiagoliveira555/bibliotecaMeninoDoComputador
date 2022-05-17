import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../img/logo_menino_do_computador.jpg';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className={styles.logo}>
                    <img className={styles.img} src={logo} alt="menino_do_computador" />
                    <span className={styles.title}>Biblioteca Menino do Computador</span>
                </div>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/livros">Livros</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;