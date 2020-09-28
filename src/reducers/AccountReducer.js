import {
    setAccount, setToken, setRefreshToken, removeAccount,
    removeRefreshToken, removeToken,
    getAccount, getToken, getRefreshToken
} from '../helpers/account';
import { INIT_ACCOUNT, REFRESH_TOKEN, SIGN_IN, SIGN_OUT, SIGN_UP } from '../actions/AccountActions';
const initialState = {
    account: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN || SIGN_UP: {
            const response = (payload) ? payload.data : null;
            const account = (response) ? response.data : null;
            const metadata = (response) ? response.metadata : null;
            const token = (metadata) ? metadata.token : null;
            const refreshToken = (metadata) ? metadata.refreshToken : null;

            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken);

            return { ...state, account };
        }
        case SIGN_OUT: {
            removeAccount();
            removeToken();
            removeRefreshToken();
            return { ...state, account: null };
        }
        case INIT_ACCOUNT: {
            const account = getAccount();
            //Aqui precisa verificar se o token ja não expirou, ou logar novamente por aqui
            return { ...state, account };
        }
        case REFRESH_TOKEN: {
            const response = (payload) ? payload.data : null;
            const metadata = (response) ? response.metadata : null;
            const token = (metadata) ? metadata.token : null;

            if (token) setToken(token);

            return state;
        }
        default: return state;
    };
};

