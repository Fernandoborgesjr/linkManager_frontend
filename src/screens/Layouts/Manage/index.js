import React from 'react';

//Este children esta sendo desestruturado do props
const Layout = ({children }) => {
    return (
        <div className="layout">
            <nav className="navbar navbar-expand-lg bg-primary text-light">
                <div className="container d-flex w-100 justify-content-between">
                    <div>
                        <span>
                            VOLTAR
                        </span>
                    </div>
                    <div className="text-center">
                        <strong>Links</strong>
                    </div>
                    <div>
                        <strong>Sair</strong>
                    </div>
                </div>
            </nav>

            <div className="container">
                {children}
            </div>
        </div>

    );
};

export default Layout;