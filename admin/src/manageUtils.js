/** Utils file for all manage pages */
import { PLACE_MAPPING, TECH_ADMIN } from './constants';
import PermissionsStore from './auth/PermissionsStore';
import restClient, { CREATE, DELETE, GET_LIST, GET_ONE } from './restClient';
import {
    apiErrorHandler,
    makeIDMapping,
    getDomainAndSiteIds,
    getDomainsAndSites,
    getUniqueIDs,
    getUntilDone,
    errorNotificationAnt,
    successNotificationAnt
} from './utils';

export const mountManager = (props, resource, object, id, idLabel, setData) => {
    if (!props.sharedResources.roleMapping) {
        setupManager(props).then(roleMapping => {
            if (!object) {
                loadObject(props, resource, id, idLabel, setData, roleMapping);
            }
        });
    } else if (!object) {
        loadObject(props, resource, id, idLabel, setData, props.sharedResources.roleMapping);
    }
};

export const setupManager = props => {
    // Set the manager places (ie Domains and Sites)
    return getManagerSetup()
        .then(setup => {
            props.setupResources(setup);
            return setup.roleMapping;
        })
        .catch(error => {
            handleAPIError(props, error);
        });
};

export const loadObject = (props, resource, id, idLabel, setData, roleMapping) => {
    Promise.all([
        restClient(GET_ONE, `${resource}s`, { id }),
        getPlaceRoles(props.match.params[idLabel], idLabel, resource, 'domain', roleMapping),
        getPlaceRoles(props.match.params[idLabel], idLabel, resource, 'site', roleMapping)
    ])
        .then(([response, domainRoles, siteRoles]) => {
            setData(response.data, {
                ...domainRoles,
                ...siteRoles
            });
        })
        .catch(error => {
            handleAPIError(props, error);
        });
};

export const handleAPIError = (props, error) => {
    const invalidToken = apiErrorHandler(error);
    invalidToken && props.invalidToken();
};

export const getPlaceRoles = (id, idLabel, resource, place, roleMapping) => {
    let ids = {};
    return restClient(GET_LIST, `${resource}${place}roles`, {
        filter: { [idLabel]: id }
    }).then(async response => {
        let placeRoles = response.data;
        if (placeRoles.length) {
            // GET THE IDS AND REPLACE THEM WITH THE ACTUAL OBJECTS.
            ids = getUniqueIDs(placeRoles, `${place}_id`);
            let places = await getUntilDone(`${place}s`, {
                ids: ids
            });
            places = makeIDMapping(places);

            placeRoles = placeRoles.reduce((obj, placeRole) => {
                obj[`${place[0]}:${placeRole[`${place}_id`]}:${placeRole.role_id}`] = {
                    [place]: places[placeRole[`${place}_id`]],
                    role: roleMapping[placeRole.role_id],
                    checked: false
                };
                return obj;
            }, {});
        }
        return placeRoles;
    });
};

export const getManagerSetup = () => {
    const contexts = PermissionsStore.getAllContexts();
    const ids = getDomainAndSiteIds(contexts);
    return Promise.all([restClient(GET_LIST, 'roles', {}), getDomainsAndSites(ids)]).then(
        ([roles, [domains, sites]]) => {
            // Set the roles on the store
            const roleMapping = makeIDMapping(roles.data);
            // Set the current manager's roles based on the role mapping for each context.
            const managerRoles = Object.entries(contexts).reduce(
                (accumulator, [place, placeRoles]) => {
                    const hasTechAdmin = placeRoles.some(
                        id => roleMapping[id].label === TECH_ADMIN
                    );
                    let roleObjects = placeRoles.map(id => roleMapping[id]);
                    if (hasTechAdmin) {
                        roleObjects = Object.values(roleMapping);
                    }
                    accumulator[place] = roleObjects;
                    return accumulator;
                },
                {}
            );
            return {
                roleMapping,
                managerRoles,
                managerDomains: makeIDMapping(domains, 'd:'),
                managerSites: makeIDMapping(sites, 's:')
            };
        }
    );
};

export const deleteRoles = (resource, roles, object, deleteRole, invalidToken) => {
    Object.entries(roles).map(([key, role]) => {
        if (role.checked) {
            const place = key.startsWith('d') ? 'domain' : 'site';
            restClient(DELETE, `${resource}${place}roles`, {
                id: `${object.id}/${role[place].id}/${role.role.id}`
            })
                .then(response => {
                    deleteRole(key);
                    successNotificationAnt(
                        `Removed role '${role.role.label}' from '${role[place].name}'!`
                    );
                })
                .catch(error => {
                    errorNotificationAnt(
                        `Something went wrong. Cannot delete role '${role.role.label}' from '${
                            role[place].name
                        }' for ${resource}`
                    );
                    const invalid = apiErrorHandler(error);
                    invalid && invalidToken();
                });
        }
        return null;
    });
};

export const assignRoles = (store, props, idLabel, object, resource) => {
    let successCount = store.amountSelectedToAssign;
    if (successCount) {
        props.assigningRoles(true);
        const [placeType, placeID] = store.assignmentLocation.split(':');
        const place = PLACE_MAPPING[placeType];
        let count = 0;
        /**
         * This map with fire off creating resource roles for each role that was selected
         * on the given domain or site.
         */
        Object.values(store.rolesToAssign).map(role => {
            if (role.checked) {
                count += 1;
                restClient(CREATE, `${resource}${place}roles`, {
                    data: {
                        [idLabel]: object.id,
                        [`${place}_id`]: parseInt(placeID, 10),
                        role_id: role.id
                    }
                })
                    .then(response => {
                        successCount -= 1;
                        const placeObject =
                            place === 'domain'
                                ? props.sharedResources.managerDomains[`d:${placeID}`]
                                : props.sharedResources.managerSites[`s:${placeID}`];
                        props.assignRole(`${placeType}:${placeID}:${role.id}`, {
                            [place]: placeObject,
                            role: props.sharedResources.roleMapping[role.id],
                            checked: false
                        });
                        successNotificationAnt(
                            `Role '${role.label}' assigned on ${place} '${placeObject.name}'`,
                            null,
                            3
                        );
                        if (!successCount) {
                            successNotificationAnt('Assignment Action Complete', 'Done', 4);
                            props.assigningRoles(false);
                            props.allAssigned();
                        } else {
                            props.assigningRoles(count !== store.amountSelectedToAssign);
                        }
                    })
                    .catch(error => {
                        errorNotificationAnt(`Role '${role.label}' cannot be assigned.`);
                        props.assigningRoles(count !== store.amountSelectedToAssign);
                        const invalid = apiErrorHandler(error);
                        invalid && props.invalidToken();
                    });
            }
            return null;
        });
    }
};
