import styles from './Table.module.css';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Table = ({ livros, setLivroEditado }) => {

    const editar = (livro) => {
        setLivroEditado(livro);
    } 

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Livro</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    livros.map(livro => (
                        <tr key={livro.id}>
                            <td>{livro.livro}</td>
                            <td>{livro.autor}</td>
                            <td>{livro.editora}</td>
                            <td>
                                <Link className={styles.edit} onClick={() => editar(livro)} to="/livros/editar"><FaPencilAlt /></Link>
                                <Link className={styles.delete} to="/livros"><FaTrash /></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Table;