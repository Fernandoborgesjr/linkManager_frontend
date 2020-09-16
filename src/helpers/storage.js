import Cookies from 'universal-cookie';

const cookie = new Cookies();

const defaultOptions = {
    path: '/',
};
export const getCookie = (name, options = {}) => {
    !name ? null : cookie.get(name, { ...defaultOptions, ...options });
};

export const setCookie = (name, value, options = {}) => {
    !name || value === undefined ? null : cookie.set(name, value, { ...defaultOptions, ...options });
    return true;
};

export const removeCookie = (name, options = {}) => {
    !name ? null : cookie.remove(name, { ...defaultOptions, ...options });
};