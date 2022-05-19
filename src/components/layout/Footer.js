import { FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={styles.logo}>
                    <a 
                        className={styles.link}
                        href="https://www.youtube.com/c/MeninodoComputador2000" 
                        target="_blank" rel="noreferrer">
                        <FaYoutube />
                    </a>
                </li>
            </ul>
            <span>Sigam nosso Canal do Youtube!</span>
        </footer>
    );
}

export default Footer;