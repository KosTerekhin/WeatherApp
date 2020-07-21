import { CLIENT, defaultLocation } from '../globalVariables/actions.global';
import { BASE_URL } from '../globalVariables/api.global';

export const MYLOCATION_URL = `${BASE_URL}weather?lat={lat}&lon={lon}&appid=${process.env.REACT_APP_API_KEY}`;

export const MYLOCATION = '[my-location]';
export const MYLOCATION_FETCH = `${MYLOCATION} FETCH`;
export const MYLOCATION_UPDATE_STORE = `${MYLOCATION} UPDATE_STORE`;
export const MYLOCATION_SET_ERROR = `${MYLOCATION} SET_ERROR`;

export const myLocationFetch = ({ payload = defaultLocation }) => ({
	type: `${CLIENT} ${MYLOCATION_FETCH}`,
	payload
});

export const myLocationUpdateStore = ({ payload, feature }) => ({
	type: MYLOCATION_UPDATE_STORE,
	payload,
	meta: {
		feature
	}
});

export const myLocationSetError = () => ({
	type: MYLOCATION_SET_ERROR
});
