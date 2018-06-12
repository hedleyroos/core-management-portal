export const CONTEXT_DOMAINS_AND_SITES_ADD = 'CONTEXT_DOMAINS_AND_SITES_ADD';
export const CONTEXT_CHANGE_GMP_CONTEXT = 'CONTEXT_CHANGE_GMP_CONTEXT';
export const CONTEXT_CHANGE_SITE_IDS = 'CONTEXT_CHANGE_SITE_IDS';
export const CONTEXT_CHANGE_ALL = 'CONTEXT_CHANGE_ALL';

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

export const contextChangeAll = ({ domainsAndSites, GMPContext, siteIDs }) => ({
    type: CONTEXT_CHANGE_ALL,
    payload: {
        domainsAndSites,
        GMPContext,
        siteIDs
    }
});
