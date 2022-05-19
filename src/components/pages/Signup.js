import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import Button from '../form/Button';
import Input from '../form/Input';

import styles from './Signup.module.css';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [emailConf, setEmailConf] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const { signup } = useAuth();
    const history = useHistory();

    const handleSignup = () => {

        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadatrado com sucesso!");
        history.push("/");
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
                    text="Confirme o e-mail"
                    type="email"
                    name="confirme_email"
                    id="confirme_email"
                    placeholder="Digite seu e-mail"
                    value={emailConf}
                    handleOnChange={(e) => [setEmailConf(e.target.value), setError('')]}
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
                <Button type="button" onClick={handleSignup} text="Inscrever-se" />
                <label>Já tem uma conta?<strong><Link to="/">&nbsp;Entre</Link></strong></label>
            </div>
        </div>
    );
}

export default Signup;