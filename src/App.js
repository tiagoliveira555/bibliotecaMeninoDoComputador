import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Container from './components/layout/Container';
import Livro from './components/pages/Livro';
import Sobre from './components/pages/Sobre';

import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LivroCadastrar from './components/pages/LivroCadastrar';
import LivroEditar from './components/pages/LivroEditar';

const App = () => {

    const data = localStorage.getItem("livros");

    const [livros, setLivros] = useState(
        data ? JSON.parse(data) : []
    );

    useEffect(() => {

        localStorage.setItem("livros", JSON.stringify(livros));

    }, [livros]);

    const addLivro = (livro) => {
        setLivros((prevState) => [...prevState, livro]);
    };

    const editarLivro = (livro) => {
        setLivros((prevState) =>
            prevState.map(l => l.id === livro.id ? l = livro : l));
    };

    const [livroEditado, setLivroEditado] = useState({});

    return (
        <Router>
            <Navbar />
            <Switch>
                <Container customClass="min-heigth">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/livros">
                        <Livro livros={livros} setLivroEditado={setLivroEditado} />
                    </Route>
                    <Route exact path="/sobre">
                        <Sobre />
                    </Route>
                    <Route exact path="/livros/cadastrar">
                        <LivroCadastrar addLivro={addLivro} />
                    </Route>
                    <Route exact path="/livros/editar">
                        <LivroEditar livroEditado={livroEditado} editarLivro={editarLivro} />
                    </Route>
                </Container>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;