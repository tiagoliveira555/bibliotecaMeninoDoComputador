import LivroForm from '../livros/LivroForm';
import styles from './LivroCadastrar.module.css';

const LivroCadastrar = ({ addLivro }) => {
    return (
        <div className={styles.cadastro_container}>
            <h1>Cadastrar Livro</h1>
            <LivroForm addLivro={addLivro} btnText="Cadastrar Livro" />
        </div>
    );
}

export default LivroCadastrar;