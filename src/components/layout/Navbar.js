import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

import styles from './Navbar.module.css';
import logo from '../../img/logo_menino_do_computador.jpg';

const Navbar = () => {

    const { signout } = useAuth();

    return (
        <nav className={styles.navbar}>
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <div className={styles.logo}>
                    <img className={styles.img} src={logo} alt="menino_do_computador" />
                    <span className={styles.title}>Menino do Computador Library</span>
                </div>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/home">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/livros">Livros</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li className={styles.item}>
                    <Link onClick={() => signout()} to="/">Sair</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;