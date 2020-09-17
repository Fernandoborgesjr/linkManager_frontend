import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from './SignInActions';

const SignIn = (props) => {
    const { signIn, account } = props;
    if (account) {
        return <Redirect to='/manage/links' />
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        signIn(data);
    };

    return (
        <div className="container h-100 pt-5">
            <h1> Entrar </h1>
            <div className="d-flex flex-column h-100">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input name="email" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input name="password" type="password" className="form-control" />
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