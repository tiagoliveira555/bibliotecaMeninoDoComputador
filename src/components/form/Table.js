import styles from './Table.module.css';

const Table = () => {
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
        </table>
    );
}

export default Table;