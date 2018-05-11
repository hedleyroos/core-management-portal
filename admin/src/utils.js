export const GenerateQueryString = parameters => {
    return Object.entries(parameters)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&');
};

export const generateNonce = () => {
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~'
    return window.crypto.getRandomValues(new Uint8Array(32)).map(
        c => {return charset[c % charset.length]}
        ).join('');
};

export const base64urlDecode = str => {
    return new Buffer(base64urlUnescape(str), 'base64').toString();
};

const base64urlUnescape = str => {
    str += Array(5 - str.length % 4).join('=');
    return str.replace(/-/g, '+').replace(/_/g, '/');
};
