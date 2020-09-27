export const getTokenExpire = (token) => {
    if (!token) return 0;
    try {
        const [, payload] = token.split('.')

        //Atob é uma função nativa do js pra decodifica Base64. btob serve para codificar
        const data = JSON.parse(atob(payload));
        const expires = data ? data.exp : 0;
        return expires;
    } catch (e) {
        return e;
    }
};