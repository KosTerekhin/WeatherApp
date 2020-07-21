import {
	UI_GLOBAL_SET_LOADING,
	UI_SEARCH_SET_LOADING,
	UI_SET_NOTIFICATION,
	UI_GLOBAL_CLEAR_LOADING,
	UI_SEARCH_CLEAR_LOADING,
	UI_CLEAR_NOTIFICATION,
	UI_REDIRECT_SUCCESS
} from '../actions/ui.actions';

const INITIAL_STATE = {
	loadingGlobal: false,
	loadingSearch: false,
	notification: null
};

// this reduce can be smaller,
// however, the idea is to have all these options in case app gets bigger
const uiReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UI_GLOBAL_SET_LOADING:
			return {
				...state,
				loadingGlobal: true
			};
		case UI_SEARCH_SET_LOADING:
			return {
				...state,
				loadingSearch: true
			};
		case UI_SET_NOTIFICATION:
			return {
				...state,
				notification: action.payload
			};

		case UI_GLOBAL_CLEAR_LOADING:
			return {
				...state,
				loadingGlobal: false
			};
		case UI_SEARCH_CLEAR_LOADING:
			return {
				...state,
				loadingSearch: false
			};
		case UI_CLEAR_NOTIFICATION:
			return {
				...state,
				notification: null
			};
		case UI_REDIRECT_SUCCESS:
			return {
				...state,
				loadingGlobal: false,
				loadingSearch: false,
				notification: null
			};

		default:
			return state;
	}
};

export default uiReducer;
