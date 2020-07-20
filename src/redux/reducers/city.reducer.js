import { CLIENT } from '../globalVariables/actions.global';
import { CITY_UPDATE_STORE, CITY_SET_ERROR, CITY_FETCH } from '../actions/city.actions';

const INITIAL_STATE = {
	data: null
};

const cityReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case `${CLIENT} ${CITY_FETCH}`:
			return {
				...state,
				error: null
			};

		case CITY_UPDATE_STORE:
			return {
				...state,
				data: action.payload
			};

		case CITY_SET_ERROR:
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
};

export default cityReducer;
