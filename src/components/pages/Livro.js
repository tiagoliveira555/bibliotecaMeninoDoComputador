import Table from "../form/Table"
import LinkButton from "../layout/LinkButton";
import styles from './Livro.module.css';

const Livro = ({ livros, setLivroEditado, deletarLivro }) => {

    return (
        <section className={styles.livro_container}>
            <div className={styles.btn}>
                <LinkButton
                    to="/livros/cadastrar"
                    text="Cadastrar Livro"
                />
            </div>
            <Table livros={livros} setLivroEditado={setLivroEditado} deletarLivro={deletarLivro} />
        </section>
    );
}

export default Livro;