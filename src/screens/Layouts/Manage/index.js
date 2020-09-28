import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signOut } from '../../../actions/AccountActions';
//Este children esta sendo desestruturado do props
const Layout = ({ children, signOut, account }) => {
    if (!account) {
        return <Redirect to='/sign-in' />
    };

    const signOutHandler = (e) => {
        e.preventDefault();
        signOut();
    }; 

    return (
        <div className="layout">
            <nav className="navbar navbar-expand-lg bg-primary text-light">
                <div className="container d-flex w-100 justify-content-between">
                    <div>
                        <span>
                            Voltar
                        </span>
                    </div>
                    <div className="text-center">
                        <strong><Link to="/links">Links</Link></strong>
                    </div>
                    <div>
                        <button className="btn-clear" onClick={signOutHandler}>Sair</button>
                    </div>
                </div>
            </nav>

            <div className="container">
                {children}
            </div>
        </div>

    );
};


const mapStateToProps = (state) => {
    return { account: state.account.account };
};

export default connect(mapStateToProps, { signOut })(Layout);