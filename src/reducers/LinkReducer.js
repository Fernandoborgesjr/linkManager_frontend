import { LINK_CREATE, LINK_EDIT, LINK_GET, LINK_LIST } from "../actions/LinkActions";

const initialState = {
    link: null,
    links: [],

};


export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LINK_CREATE: {
            const response = (payload) ? payload.data : null;
            const link = (response) ? response.data : null;
            return { ...state, link };
        }
        case LINK_LIST: {
            const response = (payload) ? payload.data : null;
            const links = (response) ? response.data : null;
            return { ...state, links };
        }
        case LINK_GET: {
            const response = (payload) ? payload.data : null;
            const link = (response) ? response.data : null;
            return { ...state, link };
        }
        case LINK_EDIT: {
            const response = (payload) ? payload.data : null;
            const link = (response) ? response.data : null;
            return { ...state, link };
        }
        default:
            return state;
    };
};