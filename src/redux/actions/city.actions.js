import { CLIENT } from '../globalVariables/actions.global';
import { BASE_URL, KEY } from '../globalVariables/api.global';

export const CITY_URL = `${BASE_URL}onecall?lat={lat}&lon={lon}&
exclude=curren,minutely,hourly&appid=${KEY}`;

export const CITY = '[city]';
export const CITY_FETCH = `${CITY} FETCH`;
export const CITY_UPDATE_STORE = `${CITY} UPDATE_STORE`;
export const CITY_SET_ERROR = `${CITY} SET_ERROR`;

export const cityFetch = ({ payload }) => ({
	type: `${CLIENT} ${CITY_FETCH}`,
	payload
});

export const cityUpdateStore = ({ payload, feature }) => ({
	type: CITY_UPDATE_STORE,
	payload,
	meta: {
		feature
	}
});

export const citySetError = () => ({
	type: CITY_SET_ERROR
});
