import { notification } from 'antd';

import restClient, { GET_LIST, OPERATIONAL } from './restClient';
import { PLACE_MAPPING } from './constants';

/**
 * Generated utils.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/

export const getContextAlphabeticallyFirst = treeData => {
    let first = treeData[0];
    treeData.map(item => {
        first = item.name.toLowerCase() < first.name ? item : first;
        return null;
    });
    return first.key;
};

export const createTreeFromContexts = contexts => {
    const ids = getDomainAndSiteIds(contexts);
    return getDomainsAndSites(ids).then(([domains, sites]) => {
        return createTreeData(
            {
                ...makeIDMapping(domains, 'd:'),
                ...makeIDMapping(sites, 's:')
            },
            'domain_id',
            's'
        );
    });
};

export const getDomainAndSiteIds = contexts => {
    return Object.keys(contexts).reduce(
        (accumulator, place) => {
            const [placeLetter, placeID] = place.split(':');
            accumulator[`${PLACE_MAPPING[placeLetter]}s`].push(placeID);
            return accumulator;
        },
        { domains: [], sites: [] }
    );
};

export const getDomainsAndSites = ids => {
    const resources = ['domain', 'site'];
    const promises = resources.map(resource => {
        return ids[`${resource}s`].length > 0
            ? getUntilDone(`${resource}s`, {
                  [`${resource}_ids`]: ids[`${resource}s`].join(',')
              })
            : Promise.resolve([]);
    });
    return Promise.all(promises);
};

export const toBool = thing => !!thing;

export const apiErrorHandler = error => {
    const message = error.body ? error.body.message || error.body.error : error.toString();
    errorNotificationAnt(message, 'Error');
    if (error.message === 'Token expired') {
        localStorage.clear();
        return true;
    }
    return false;
};

export const successNotificationAnt = (description, heading = null, duration = 3) => {
    notification.success({
        message: heading || 'Success!',
        description,
        duration,
        style: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 16
        },
        placement: 'bottomRight'
    });
};

export const errorNotificationAnt = (description, heading = null, duration = 0) => {
    notification.error({
        message: heading || 'Oh No!',
        description,
        duration,
        style: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 16
        },
        placement: 'bottomRight'
    });
};

export const createTreeData = (data, parentField = null, childType = null) => {
    /**
     * This function creates a hierarchy data structure from
     * a list of objects for the tree select of Ant Design
     */

    /*
        This reference mapping will be a mapping of an object ID to the object data with
        a list of all the children object IDs. (Value/label/key were added for Ant Design TreeSelect)
        eg.
        {
            1: {
                id: 1,
                name: 'obj1',
                parent_id: null,
                label: 'obj1',
                key: 1,
                value: 1,
                children: [2, 3]
            }
            ... etc ...
        }
    */

    const referenceMapping = Object.entries(data).reduce((accumulator, [key, obj]) => {
        const newObject = {
            ...obj,
            label: obj.name,
            value: key,
            key
        };
        if (childType ? key.indexOf(childType) < 0 : true) {
            const children = Object.entries(data).reduce((children, [childKey, childObj]) => {
                if (
                    childKey !== key &&
                    (childObj.parent_id === obj.id || childObj[parentField] === obj.id)
                ) {
                    children.push(childKey);
                }
                return children;
            }, []);
            newObject['children'] = children;
        }
        accumulator[key] = newObject;
        return accumulator;
    }, {});

    // This set will hold all of the objects that are evaluated in the
    // reference mapping so they are not evaluated again unnecessarily.
    let childrenEvaluated = new Set([]);
    let treeData = {};

    /**
     * This loop is recursive and will replace all children it finds in the object
     * with the actual children objects, not their ID's. IF a child is found in the
     * current treeData, then it is removed from the top level and placed in as a child.
     */
    const childrenLoop = obj => {
        const newObj = obj;
        if (newObj.children) {
            newObj.children = newObj.children.map(childKey => {
                childrenEvaluated.add(childKey.toString());
                let childObj = null;
                if (treeData[childKey.toString()]) {
                    childObj = treeData[childKey.toString()];
                    delete treeData[childKey.toString()];
                } else {
                    childObj = referenceMapping[childKey];
                    childObj = childrenLoop(childObj);
                }
                return childObj;
            });
        }
        return newObj;
    };

    /**
     * This loops through the reference mapping and if the object has not been evaluated yet as
     * a child, it will then run the childrenLoop on it to fill out its tree and then add to the
     * treeData object.
     */
    Object.entries(referenceMapping).reduce((accumulator, [key, obj]) => {
        if (!childrenEvaluated.has(key)) {
            const newObj = childrenLoop(obj);
            treeData[key] = newObj;
        }
        return accumulator;
    }, {});

    /**
     * The treeData returned must be a list of the top level objects. This will just be
     * the values of the treeData Object.
     */
    return Object.values(treeData);
};

// This exists to check if the string for the array filters have more than
// one id in them. eg idsInString == '5,7,12'
export const moreThanOneID = idsInString => idsInString.split(',').length > 1;

export const getSitesForContext = async currentContext => {
    if (currentContext) {
        const [contextType, contextID] = currentContext.split(':');
        if (contextType === 's') {
            return contextID;
        }
        let results = await restClient(OPERATIONAL, 'get_sites_under_domain', {
            pathParameters: [contextID]
        });
        results = results.data;
        const site_ids = getUniqueIDs(results, 'id').join(',');
        return site_ids;
    } else {
        return '';
    }
};

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

export const makeIDMapping = (listOfObjects, prefix = '') => {
    return listOfObjects.reduce((accumulator, obj) => {
        accumulator[`${prefix}${obj.id}`] = obj;
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

export const notEmptyObject = obj => Object.keys(obj).length > 0;

export const generateQueryString = parameters => {
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
