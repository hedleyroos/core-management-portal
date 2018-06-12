import { CONTEXT_DOMAINS_AND_SITES_ADD, CONTEXT_CHANGE_GMP_CONTEXT } from '../actions/context';

export default (state = {}, { type, payload }) => {
    switch (type) {
        case CONTEXT_DOMAINS_AND_SITES_ADD:
            return {
                domainsAndSites: payload,
                GMPContext: {}
            };
        case CONTEXT_CHANGE_GMP_CONTEXT:
            return {
                domainsAndSites: state.domainsAndSites,
                GMPContext: payload
            };
        default:
            return state;
    }
};
