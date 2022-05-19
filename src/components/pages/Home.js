// import imagem from '../../img/m.png';
import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo a <span>Biblioteca</span></h1>
            <p>"Quando o mundo estiver unido na busca do conhecimento, e não mais lutando por dinheiro e poder, então nossa sociedade poderá enfim evoluir a um novo nível."</p>
            <LinkButton to="/livros/cadastrar" text="Cadastrar Livro" />
            {/* <img src={imagem} alt="Menino do Computador" /> */}
        </section>
    );
}

export default Home;