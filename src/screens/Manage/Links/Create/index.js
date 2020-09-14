import React from 'react';
import Layout from '../../../Layouts/Manage/index';
const Create = () => {
    return (
        <Layout>
            <h1>Criar Link</h1>
            <div>
                <form>
                    <div className="form-group">
                        <label>Descrição</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>URL</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="isSocial" />
                            <span className="form-check-sign"></span>
                            É rede social?
                            </label>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Entrar</button>
                    </div>
                </form>
            </div>
        </Layout >
    );
};


export default Create;