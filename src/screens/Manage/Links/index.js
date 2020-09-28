import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../Layouts/Manage/index';
import { linkList, setLinkToRemove, linkRemove } from '../../../actions/LinkActions'
const Links = ({ links, linkRemove, linkToRemove, linkList, setLinkToRemove }) => {

    useEffect(() => {
        linkList();
    }, [linkList]);

    const cancelDelete = (e) => setLinkToRemove(null);
    const confirmDelete = (e) => (linkToRemove ? linkRemove(linkToRemove) : null);


    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <h1>Links</h1>
                </div>
                <div className="col text-right align-self-bottom pt-2">
                    <Link to='/manage/links/create' className="btn btn-primary">Adicionar</Link>
                </div>
            </div>

            {links && links.length ?

                links.map((link) => {

                    const deleteClick = (e) => setLinkToRemove(link);
                    const border = (linkToRemove && linkToRemove.id === link.id)
                        ? 'border border-danger rounded'
                        : 'border btn-transparent';
                    return (
                        <div key={link.id} className={`pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between ${border}`}>
                            <div className="pr-3">
                                <img src="https://via.placeholder.com/100" alt="Link icon" />
                            </div>
                            <div className="align-self-center">
                                <span className="text-primary clearfix strong">{link.label}</span>
                                <a className="text-primary clearfix" href={link.url} target='_blank'>{link.url}</a>
                            </div>
                            <div className="ml-auto p-2 clearfix">
                                <Link className="btn btn-primary" to={`/manage/links/edit/${link.id}`} >Editar</Link>
                                <button className="btn btn-danger" onClick={deleteClick}>Deletar</button>

                            </div>
                        </div>
                    )
                })
                : (<h1>Ainda nenhum link cadastrado :(</h1>)}

            {linkToRemove ? (
                <div className="alert alert-danger rounded float-center shadow-strong">
                    <h4 className="alert-heading">Confirmação de exclusão!</h4>
                    <p>Você tem certeza que quer excluir o item selecionado? Esta ação não
                    poderá ser desfeita.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-light" onClick={cancelDelete}>Cancelar</button>
                        <button className="btn btn-danger" onClick={confirmDelete}>Excluir</button>
                    </div>
                </div>
            ) : null}
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        links: state.link.links,
        linkToRemove: state.link.linkToRemove
    };
};

export default connect(mapStateToProps, { linkList, setLinkToRemove, linkRemove })(Links);