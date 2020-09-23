import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { linkGet, linkEdit } from '../../../../actions/LinkActions';
import { getFormData } from '../../../../helpers/form';
import FormCheck from '../../../../components/FormCheck';
import FormGroup from '../../../../components/FormGroup';
import Layout from '../../../Layouts/Manage/index';
const Edit = ({ link, linkGet, linkEdit }) => {
    const { id } = useParams();

    useEffect(() => {
        linkGet(id);
    }, [id, linkGet]);

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);
        linkEdit(data, id);
    };
    return (
        <Layout>
            <h1>Editar Link</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <FormGroup label="Descrição" name="label" data={link} type="text" />
                    <FormGroup label="URL" name="url" data={link} type="text" />
                    <FormCheck label="É rede social?" name="isSocial" data={link} />
                    <div>
                        <button className="btn btn-primary btn-round">Salvar</button>
                    </div>
                </form>
            </div>
        </Layout >
    );
};

const mapStateToProps = (state) => {
    return { link: state.link.link, }
};


export default connect(mapStateToProps, { linkGet, linkEdit })(Edit);