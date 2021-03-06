import { CLIENT } from '../globalVariables/actions.global';
import { MYLOCATION_FETCH, MYLOCATION_UPDATE_STORE } from '../actions/my-location.actions';

const INITIAL_STATE = {
	data: null
};

const myLocationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MYLOCATION_UPDATE_STORE:
			return {
				...state,
				data: action.payload
			};

		case `${CLIENT} ${MYLOCATION_FETCH}`:
			return {
				...state,
				error: null
			};

		default:
			return state;
	}
};

export default myLocationReducer;
