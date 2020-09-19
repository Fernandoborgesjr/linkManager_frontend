import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../actions/AccountActions';
import { getFormData } from '../../helpers/form';

const SignUp = (props) => {

  const { signUp, account } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    signUp(getFormData(e));
  };

  if (account) {
    return <Redirect to='/manage/links' />
  }

  return (
    <div className="container h-100 pt-5">
      <h1> Cadastrar </h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>E-mail</label>
            <input name="email" type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input name="password" type="password" className="form-control" placeholder="Digite uma senha" required />
          </div>
          <div className="form-group">
            <label>Confirmar Senha</label>
            <input name="passwordConfirmation" type="password" className="form-control" placeholder="Confirme a senha digitada" required />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Cadastrar</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Já possui uma conta?</div>
          <Link to="/sign-in">Entrar</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapStateToProps, { signUp })(SignUp);
