import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="container h-100 pt-5">
            <h1> Cadastrar </h1>
            <div className="d-flex flex-column h-100">
                <form>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" placeholder="Digite uma senha" required/>
                    </div>
                    <div className="form-group">
                        <label>Confirmar Senha</label>
                        <input type="password" className="form-control" placeholder="Confirme a senha digitada" required/>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Cadastrar</button>
                    </div>
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Já possui uma conta?</div>
                    <Link to='/sign-in'>Entrar</Link>
                </div>
            </div>
        </div>
    );
};


export default SignUp;