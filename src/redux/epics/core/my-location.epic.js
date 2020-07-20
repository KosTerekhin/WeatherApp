import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CLIENT } from '../../globalVariables/actions.global';
import {
	MYLOCATION,
	MYLOCATION_URL,
	MYLOCATION_FETCH,
	myLocationUpdateStore,
	myLocationSetError
} from '../../actions/my-location.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { setNotification } from '../../actions/ui.actions';
import { urlUpdate } from '../../utils/functions.utils';

export const myLocationEpic = (action$) =>
	action$.pipe(
		ofType(`${CLIENT} ${MYLOCATION_FETCH}`),
		map(({ payload: { coords: { latitude: lat, longitude: lon } } }) => {
			const url = urlUpdate({
				url: MYLOCATION_URL,
				lat,
				lon
			});
			return apiRequest({ url, feature: MYLOCATION });
		})
	);

export const myLocationFetchSuccessEpic = (action$) =>
	action$.pipe(
		ofType(`${MYLOCATION} ${API_SUCCESS}`),
		mergeMap(({ payload }) => of(myLocationUpdateStore({ payload, feature: MYLOCATION })))
	);

export const myLocationFetchErrorEpic = (action$) =>
	action$.pipe(
		ofType(`${MYLOCATION} ${API_ERROR}`),
		mergeMap(({ payload }) =>
			of(myLocationSetError({ error: payload }), setNotification({ message: 'server error' }))
		)
	);
