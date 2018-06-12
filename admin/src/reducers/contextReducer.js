import {
    CONTEXT_DOMAINS_AND_SITES_ADD,
    CONTEXT_CHANGE_GMP_CONTEXT,
    CONTEXT_CHANGE_SITE_IDS,
    CONTEXT_CHANGE_ALL
} from '../actions/context';

export default (state = {}, { type, payload }) => {
    switch (type) {
        case CONTEXT_DOMAINS_AND_SITES_ADD:
            return {
                domainsAndSites: payload,
                GMPContext: {},
                siteIDs: ''
            };
        case CONTEXT_CHANGE_GMP_CONTEXT:
            return {
                domainsAndSites: state.domainsAndSites,
                GMPContext: payload,
                siteIDs: ''
            };
        case CONTEXT_CHANGE_SITE_IDS:
            return {
                domainsAndSites: state.domainsAndSites,
                GMPContext: state.GMPContext,
                siteIDs: payload
            };
        case CONTEXT_CHANGE_ALL:
            return {
                ...payload
            };
        default:
            return state;
    }
};
