import { FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={styles.logo}>
                    <FaYoutube />
                </li>
            </ul>
            <span>Sigam nosso Canal do Youtube!</span>
        </footer>
    );
}

export default Footer;