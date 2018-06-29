import {
	MANAGE_USER_ROLES_SET_SEARCH_RESULTS,
	MANAGE_USER_ROLES_SELECT_USER
} from '../actions/manageUserRoles';

export default (state = {}, { type, payload }) => {
	switch(type) {
		case MANAGE_USER_ROLES_SET_SEARCH_RESULTS:
		case MANAGE_USER_ROLES_SELECT_USER:
		default:
			return state;
	}
}