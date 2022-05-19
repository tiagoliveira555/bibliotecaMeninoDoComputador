import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from './LivroForm.module.css';

const LivroForm = ({ btnText, addLivro, livroEditado, editarLivro }) => {
    const history = useHistory();

    console.log(livroEditado);
    
    const [nomeLivro, setNomeLivro] = useState(livroEditado !== undefined ? livroEditado.livro : '');
    const [autor, setAutor] = useState(livroEditado !== undefined ? livroEditado.autor : '');
    const [editora, setEditora] = useState(livroEditado !== undefined ? livroEditado.editora : '');

    const gerarId = () => {
        return livroEditado !== undefined ? livroEditado.id : Math.round(Math.random() * 1000);
    }
 
    const livro = {
        
        id: gerarId(),
        livro: nomeLivro,
        autor: autor,
        editora: editora
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if (!nomeLivro || !autor || !editora) {
            alert('Um ou mais campos não foram preenchidos!');
            return;
        }

        if (livroEditado === undefined) {
            addLivro(livro);
            alert("Livro adicionado com sucesso!");
        } else {
            editarLivro(livro);
            alert("Livro editado com sucesso!");
        }
        history.push("/livros");
    }

    return (
        <form className={styles.form} onSubmit={formSubmit}>
            <Input 
                type="text"
                text="Livro"
                name="livro"
                placeholder="Insira o nome do livro"
                handleOnChange={(e) => setNomeLivro(e.target.value)}
                value={nomeLivro}
            />
            <Input 
                type="text"
                text="Autor"
                name="autor"
                placeholder="Autor"
                handleOnChange={(e) => setAutor(e.target.value)}
                value={autor}
            />
            <Input 
                type="text"
                text="Editora"
                name="editora"
                placeholder="Editora"
                handleOnChange={(e) => setEditora(e.target.value)}
                value={editora}
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default LivroForm;