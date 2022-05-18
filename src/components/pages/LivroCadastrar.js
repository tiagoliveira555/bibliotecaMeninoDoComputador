import LivroForm from '../livros/LivroForm';
import styles from './LivroCadastrar.module.css';

const LivroCadastrar = () => {
    return (
        <div className={styles.cadastro_container}>
            <h1>Cadastrar Livro</h1>
            <LivroForm btnText="Cadastrar Livro" />
        </div>
    );
}

export default LivroCadastrar;