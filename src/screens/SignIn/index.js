import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from './SignInActions';

const SignIn = (props) => {
    const { account, signIn } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        signIn({ email: 'fernandoborgesjr96@outlook.com', password: "Ab123456" });
    };

    console.log('*** SignIn.account', account);

    return (
        <div className="container h-100 pt-5">
            <h1> Entrar </h1>
            <div className="d-flex flex-column h-100">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" />
                    </div>
                    
                        <button className="btn btn-primary btn-round">Entrar</button>
                    
                </form>

                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Não possui uma conta?</div>
                    <Link to='/sign-up'>Cadastrar</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { account: state.signIn.account };
};

export default connect(mapStateToProps, { signIn })(SignIn);