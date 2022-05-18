import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from './LivroForm.module.css';

const LivroForm = ({ btnText }) => {
    return (
        <form className={styles.form}>
            <Input 
                type="text"
                text="Livro"
                name="livro"
                placeholder="Insira o livro"
            />
            <Input 
                type="text"
                text="Autor"
                name="autor"
                placeholder="Autor"
            />
            <Input 
                type="text"
                text="Editora"
                name="editora"
                placeholder="Editora"
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default LivroForm;