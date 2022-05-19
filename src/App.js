import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';

import useAuth from './hooks/useAuth';

import './index.css';
import Principal from './Principal';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />
}

const App = () => {

    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/home">
                        <Private Item={Principal} />
                    </Route>
                    <Route exact path="/livros">
                        <Private Item={Principal} />
                    </Route>
                    <Route exact path="/livros/cadastrar">
                        <Private Item={Principal} />
                    </Route>
                    <Route exact path="/livros/editar">
                        <Private Item={Principal} />
                    </Route>
                    <Route exact path="/sobre">
                        <Private Item={Principal} />
                    </Route>

                    <Route exact path="/">
                        <Signin />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route exact path="*">
                        <Signin />
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;