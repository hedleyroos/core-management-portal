import {
    CONTEXT_DOMAINS_AND_SITES_ADD,
    CONTEXT_CHANGE_GMP_CONTEXT,
    CONTEXT_CHANGE_SITE_IDS,
    CONTEXT_CHANGE_ALL
} from '../actionTypes';

export const contextDomainsAndSitesAdd = domainsAndSites => ({
    type: CONTEXT_DOMAINS_AND_SITES_ADD,
    payload: domainsAndSites
});

export const contextChangeGMPContext = GMPContext => ({
    type: CONTEXT_CHANGE_GMP_CONTEXT,
    payload: GMPContext
});

export const contextChangeSiteIDs = siteIDs => ({
    type: CONTEXT_CHANGE_SITE_IDS,
    payload: siteIDs
});

export const contextChangeAll = newContextState => ({
    type: CONTEXT_CHANGE_ALL,
    payload: newContextState
});
