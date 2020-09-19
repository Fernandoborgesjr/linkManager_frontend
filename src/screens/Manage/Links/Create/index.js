import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { linkCreate } from '../../../../actions/LinkActions';
import { getFormData } from '../../../../helpers/form';
import Layout from '../../../Layouts/Manage/index';

const Create = ({ link, linkCreate }) => {
    const submitHandler = (e) => {
        e.preventDefault();
        linkCreate(getFormData(e));
    };

    if (link) {
        return <Redirect to="/manage/links" />
    };

    return (
        <Layout>
            <h1>Criar Link</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Descrição</label>
                        <input name="label" type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>URL</label>
                        <input name="url" type="text" className="form-control" required />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="isSocial" />
                            <span className="form-check-sign"></span>
                            É rede social?
                            </label>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Cadastrar</button>
                    </div>
                </form>
            </div>
        </Layout >
    );
};

const mapStateToProps = (state) => {
    return { link: state.link.link }
};

export default connect(mapStateToProps, { linkCreate })(Create);