export const CONTEXT_DOMAINS_AND_SITES_ADD = 'CONTEXT_DOMAINS_AND_SITES_ADD';
export const CONTEXT_CHANGE_GMP_CONTEXT = 'CONTEXT_CHANGE_GMP_CONTEXT';

export const contextDomainsAndSitesAdd = allPlaces => ({
    type: CONTEXT_DOMAINS_AND_SITES_ADD,
    payload: allPlaces
});

export const contextChangeGMPContext = newContext => ({
	type: CONTEXT_CHANGE_GMP_CONTEXT,
	payload: newContext
});
