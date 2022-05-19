import styles from './Sobre.module.css';

const Sobre = () => {
    return (
        <section className={styles.sobre_container}>
            <h3>Sobre nós:</h3>
            <p>
                O Menino do Computador e seus parceiros disponibilizam conteúdo 
                de dominio publico e propriedade intelectual de forma totalmente gratuita, 
                por acreditar que o conhecimento e a educação devem ser acessíveis e livres a 
                toda e qualquer pessoa. Você pode encontrar mais obras em nosso 
                site: meninodocomputador
            </p>
        </section>
    );
}

export default Sobre;