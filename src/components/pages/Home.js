import imagem from '../../img/m.png';
import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo a <span>Biblioteca</span></h1>
            <p>Projeto criado para obter a nota A3 do curso Usabilidade, desenvolvimento web, mobile e jogos!</p>
            <LinkButton to="/livros/cadastrar" text="Cadastrar Livro" />
            <img src={imagem} alt="Menino do Computador" />
        </section>
    );
}

export default Home;