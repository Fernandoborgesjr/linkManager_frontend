import {
    setAccount, setToken, setRefreshToken, removeAccount,
    removeRefreshToken, removeToken
} from '../helpers/account';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../actions/AccountActions';
const initialState = {
    account: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN || SIGN_UP:
            const response = (payload) ? payload.data : null;
            const account = (response) ? response.data : null;
            const metadata = (response) ? response.metadata : null;
            const token = (metadata) ? metadata.token : null;
            const refreshToken = (metadata) ? metadata.refreshToken : null;

            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken);

            return { ...state, account };

        case SIGN_OUT:
            removeAccount();
            removeToken();
            removeRefreshToken();
            return { ...initialState, account: null };

        default: return state;
    };
};

