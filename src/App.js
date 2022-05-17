import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import Container from './components/layout/Container';
import Livro from './components/pages/Livro';
import Sobre from './components/pages/Sobre';

import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Container customClass="min-heigth">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/livros">
                        <Livro />
                    </Route>
                    <Route exact path="/sobre">
                        <Sobre />
                    </Route>
                </Container>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;