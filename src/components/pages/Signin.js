import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import Button from '../form/Button';

import Input from '../form/Input';
import styles from './Signin.module.css';

const Signin = () => {

    const { signin } = useAuth();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {

        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        history.push("/home");
    };

    return (
        <div className={styles.container}>
            <h1>SISTEMA DE LOGIN</h1>
            <div className={styles.content}>
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    handleOnChange={(e) => [setEmail(e.target.value), setError('')]}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    handleOnChange={(e) => [setSenha(e.target.value), setError('')]}
                />
                <label>{error}</label>
                <Button type="button" onClick={handleLogin} text="Entrar" />
                <label>Não tem conta?<strong><Link to="/signup">&nbsp;Registre-se</Link></strong></label>
            </div>
        </div>
    );
}

export default Signin;