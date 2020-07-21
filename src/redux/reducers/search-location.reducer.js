import { CLIENT } from '../globalVariables/actions.global';
import {
	SEARCHLOCATION_FETCH,
	SEARCHLOCATION_UPDATE_STORE,
	SEARCHLOCATION_SET_ERROR,
	SEARCHLOCATION_CLEAR_ERROR
} from '../actions/search-location.actions';
import { UI_REDIRECT_SUCCESS } from '../actions/ui.actions';

const INITIAL_STATE = {
	cities: null,
	error: null
};

const searchLocationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SEARCHLOCATION_UPDATE_STORE:
			return {
				...state,
				cities: action.payload
			};

		case SEARCHLOCATION_SET_ERROR:
			return {
				...state,
				error: action.payload
			};

		case SEARCHLOCATION_CLEAR_ERROR:
			return {
				...state,
				error: null
			};

		case `${CLIENT} ${SEARCHLOCATION_FETCH}`:
			return {
				...state,
				error: null
			};

		case UI_REDIRECT_SUCCESS: {
			return {
				...state,
				cities: null,
				error: null
			};
		}

		default:
			return state;
	}
};

export default searchLocationReducer;
