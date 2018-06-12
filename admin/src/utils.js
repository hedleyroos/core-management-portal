import restClient, { GET_LIST } from './swaggerRestServer';

/**
 * Generated utils.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
export const getUntilDone = async (resource, filter = {}, perPage, maxAttempts = 10) => {
    let collection = [];
    let done = false;
    let page = 1;
    while (!done && page !== maxAttempts) {
        let response = await restClient(GET_LIST, resource, {
            pagination: {
                perPage: perPage || 0,
                page
            },
            filter
        });
        page++;
        const total = response.total;
        collection.push(...response.data);
        if (collection.length >= total) {
            done = true;
        }
    }
    if (page === maxAttempts) {
        console.error('Warning: Max attempts for `getUntilDone` function reached!');
    }
    return collection;
};

export const makeIDMapping = listOfObjects => {
    return listOfObjects.reduce((accumulator, obj) => {
        accumulator[obj.id] = obj;
        return accumulator;
    }, {});
};

export const getUniqueIDs = (list, key) => {
    return list.reduce((accumulator, item) => {
        if (accumulator.indexOf(item[key]) < 0) {
            accumulator.push(item[key]);
        }
        return accumulator;
    }, []);
};

export const NotEmptyObject = obj => Object.keys(obj).length > 0;

export const GenerateQueryString = parameters => {
    return Object.entries(parameters)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
};

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

export const generateNonce = () => {
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~';
    const result = [];
    window.crypto
        .getRandomValues(new Uint8Array(32))
        .forEach(c => result.push(charset[c % charset.length]));
    return result.join('');
};

export const base64urlDecode = str => {
    return new Buffer(base64urlUnescape(str), 'base64').toString();
};

const base64urlUnescape = str => {
    str += Array(5 - (str.length % 4)).join('=');
    return str.replace(/-/g, '+').replace(/_/g, '/');
};
/** End of Generated Code **/
