import LivroForm from '../livros/LivroForm';
import styles from './LivroEditar.module.css';

const LivroEditar = ({ livroEditado, editarLivro }) => {
    return (
        <div className={styles.editar_container}>
            <h1>Editar Livro</h1>
            <LivroForm btnText="Editar Livro" livroEditado={livroEditado} editarLivro={editarLivro} />
        </div>
    );
}

export default LivroEditar;