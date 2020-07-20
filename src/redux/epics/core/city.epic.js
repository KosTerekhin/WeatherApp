import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { CLIENT } from '../../globalVariables/actions.global';
import { CITY, CITY_URL, CITY_FETCH, cityUpdateStore, citySetError } from '../../actions/city.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { setNotification } from '../../actions/ui.actions';
import { urlUpdate } from '../../utils/functions.utils';

export const cityEpic = (action$) =>
	action$.pipe(
		ofType(`${CLIENT} ${CITY_FETCH}`),
		map(({ payload: { lat, lon } }) => {
			const url = urlUpdate({
				url: CITY_URL,
				lat,
				lon
			});
			return apiRequest({ url, feature: CITY });
		})
	);

export const cityFetchSuccessEpic = (action$) =>
	action$.pipe(
		ofType(`${CITY} ${API_SUCCESS}`),
		mergeMap(({ payload }) => of(cityUpdateStore({ payload, feature: CITY })))
	);

export const cityFetchErrorEpic = (action$) =>
	action$.pipe(
		ofType(`${CITY} ${API_ERROR}`),
		mergeMap(({ payload }) => of(citySetError({ error: payload }), setNotification({ message: 'server error' })))
	);
