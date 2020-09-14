import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="container h-100 pt-5">
            <h1> Entrar </h1>
            <div className="d-flex flex-column h-100">
                <form>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" required/>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Entrar</button>
                    </div>
                </form>

                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Não possui uma conta?</div>
                    <Link to='/sign-up'>Cadastrar</Link>
                </div>
            </div>
        </div>
    );
};


export default SignIn;