import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { linkGet } from '../../../../actions/LinkActions';
import FormCheck from '../../../../components/FormCheck';
import FormGroup from '../../../../components/FormGroup';
import Layout from '../../../Layouts/Manage/index';
const Edit = ({ link, linkGet }) => {
    const { id } = useParams();

    useEffect(() => {
        linkGet(id);
    }, [id, linkGet]);

    console.log(id)
    console.log(link)

    return (
        <Layout>
            <h1>Editar Link</h1>
            <div>
                <form>
                    <FormGroup label="Descrição" name="label" data={link} type="text" />
                    <FormGroup label="URL" name="url" data={link} type="text" />
                    <FormCheck label="É rede social?" name="isSocial" data={link} />
                    <div>
                        <button className="btn btn-primary btn-round">Entrar</button>
                    </div>
                </form>
            </div>
        </Layout >
    );
};

const mapStateToProps = (state) => {
    return { link: state.link.link, }
};


export default connect(mapStateToProps, { linkGet })(Edit);