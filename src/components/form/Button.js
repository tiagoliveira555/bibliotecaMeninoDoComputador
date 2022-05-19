import styles from './Button.module.css';

const Button = ({ text, type, onClick }) => {
    return (
        <div>
            <button type={type} className={styles.btn} onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;