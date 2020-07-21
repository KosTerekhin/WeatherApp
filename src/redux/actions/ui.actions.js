import { CLIENT } from '../globalVariables/actions.global';

export const UI = '[ui]';
export const GLOBAL = ':GLOBAL';
export const SEARCH = ':SEARCH';

export const UI_REDIRECT = `${UI} REDIRECT`;
export const UI_REDIRECT_SUCCESS = `${UI} REDIRECT_SUCCESS`;
export const UI_GLOBAL_SET_LOADING = `${UI}${GLOBAL} SET_LOADING`;
export const UI_SEARCH_SET_LOADING = `${UI}${SEARCH} SET_LOADING`;
export const UI_SET_NOTIFICATION = `${UI} SET_NOTIFICATION`;

export const UI_GLOBAL_CLEAR_LOADING = `${UI}${GLOBAL} CLEAR_LOADING`;
export const UI_SEARCH_CLEAR_LOADING = `${UI}${SEARCH} CLEAR_LOADING`;
export const UI_CLEAR_NOTIFICATION = `${UI} CLEAR_NOTIFICATION`;
export const UI_NOTIFICATION_MESSAGES = {
	serverError: 'server error'
};

// REDIRECT ACTIONS
export const redirectorClient = ({ route, history }) => ({
	type: `${CLIENT} ${UI_REDIRECT}`,
	route,
	history
});

export const redirectSuccess = () => ({
	type: UI_REDIRECT_SUCCESS
});

// SET ACTIONS
export const setGlobalLoading = () => ({
	type: UI_GLOBAL_SET_LOADING
});
export const setSearchLoading = () => ({
	type: UI_SEARCH_SET_LOADING
});
export const setNotification = ({ message }) => ({
	type: UI_SET_NOTIFICATION,
	payload: message
});
// CLEAR ACTION
export const clearGlobalLoading = () => ({
	type: UI_GLOBAL_CLEAR_LOADING
});
export const clearSearchLoading = () => ({
	type: UI_SEARCH_CLEAR_LOADING
});
export const clearNotification = () => ({
	type: UI_CLEAR_NOTIFICATION
});
