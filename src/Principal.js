import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Container from './components/layout/Container';
import Livro from './components/pages/Livro';
import Sobre from './components/pages/Sobre';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LivroCadastrar from './components/pages/LivroCadastrar';
import LivroEditar from './components/pages/LivroEditar';

const Principal = () => {

    const data = localStorage.getItem("livros");

    const [livros, setLivros] = useState(
        data ? JSON.parse(data) : []
    );

    useEffect(() => {

        localStorage.setItem("livros", JSON.stringify(livros));

    }, [livros]);

    const addLivro = (livro) => {
        setLivros((prevState) => [...prevState, livro]);

        alert("Livro adicionado com sucesso!");
    };

    const editarLivro = (livro) => {
        setLivros((prevState) =>
            prevState.map(l => l.id === livro.id ? l = livro : l));

        alert("Livro editado com sucesso!");
    };

    const deletarLivro = (id) => {
        setLivros((prevState) => prevState.filter(livro => livro.id !== id));

        alert('Livro deletado com sucesso!');
    };

    const [livroEditado, setLivroEditado] = useState({});

    return (
        <Router>
            <Navbar />
            <Container customClass="min-heigth">
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/livros">
                        <Livro
                            livros={livros}
                            setLivroEditado={setLivroEditado}
                            deletarLivro={deletarLivro}
                        />
                    </Route>
                    <Route exact path="/sobre">
                        <Sobre />
                    </Route>
                    <Route exact path="/livros/cadastrar">
                        <LivroCadastrar addLivro={addLivro} />
                    </Route>
                    <Route exact path="/livros/editar">
                        <LivroEditar
                            livroEditado={livroEditado}
                            editarLivro={editarLivro}
                        />
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </Router>
    );
}

export default Principal;