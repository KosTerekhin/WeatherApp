import { CLIENT } from '../globalVariables/actions.global';
import { CITIES_URL } from '../globalVariables/api.global';

export const SEARCHLOCATION_URL = `${CITIES_URL}`;

export const SEARCHLOCATION = '[search-location]';
export const SEARCHLOCATION_FETCH = `${SEARCHLOCATION} FETCH`;
export const SEARCHLOCATION_UPDATE_STORE = `${SEARCHLOCATION} UPDATE_STORE`;
export const SEARCHLOCATION_SET_ERROR = `${SEARCHLOCATION} SET_ERROR`;
export const SEARCHLOCATION_CLEAR_ERROR = `${SEARCHLOCATION} CLEAR_ERROR`;
export const SEARCHLOCATION_DEBOUNCE = {
	debounceTime: 1000
};

export const searchLocationFetch = ({ payload, minLength = 3 }) => ({
	type: `${CLIENT} ${SEARCHLOCATION_FETCH}`,
	payload,
	meta: minLength
});

export const searchLocationUpdateStore = ({ payload, feature }) => ({
	type: SEARCHLOCATION_UPDATE_STORE,
	payload,
	meta: {
		feature
	}
});

export const searchLocationSetError = ({ error }) => ({
	type: SEARCHLOCATION_SET_ERROR,
	payload: error
});

export const searchLocationClearError = () => ({
	type: SEARCHLOCATION_CLEAR_ERROR
});
