/**
 * Generated utils.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
export const GenerateQueryString = parameters => {
    return Object.entries(parameters)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&');
};

<<<<<<< HEAD
// Produce a title case string
export const titleCase = string => {
    return string
        .toLowerCase()
        .split(' ')
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
};

/** End of Generated Code **/
=======
export const generateNonce = () => {
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~';
    const result = [];
    window.crypto.getRandomValues(new Uint8Array(32)).forEach(c =>
        result.push(charset[c % charset.length]));
    return result.join('');
};

export const base64urlDecode = str => {
    return new Buffer(base64urlUnescape(str), 'base64').toString();
};

const base64urlUnescape = str => {
    str += Array(5 - str.length % 4).join('=');
    return str.replace(/-/g, '+').replace(/_/g, '/');
};
>>>>>>> c8e1d3495473d40e3f132a05961e76ec10eda877
