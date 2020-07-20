import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { tap, map, mergeMap, filter } from 'rxjs/operators';
import { CLIENT } from '../../globalVariables/actions.global';
import {
	SEARCHLOCATION,
	SEARCHLOCATION_URL,
	SEARCHLOCATION_FETCH,
	searchLocationUpdateStore,
	searchLocationSetError
} from '../../actions/search-location.actions';
import { API_SUCCESS, API_ERROR, apiCustomRequest } from '../../actions/api.actions';

export const searchLocationEpic = (action$) =>
	action$.pipe(
		ofType(`${CLIENT} ${SEARCHLOCATION_FETCH}`),
		filter(({ payload, meta }) => payload.length >= meta),
		map(({ payload }) =>
			apiCustomRequest({ body: null, url: SEARCHLOCATION_URL + payload, method: 'GET', feature: SEARCHLOCATION })
		)
	);

export const searchLocationFetchSuccessEpic = (action$) =>
	action$.pipe(
		ofType(`${SEARCHLOCATION} ${API_SUCCESS}`),
		tap((action) => console.log(action.payload, 'SEARCH EPIC')),
		mergeMap(({ payload }) => of(searchLocationUpdateStore({ payload, feature: SEARCHLOCATION })))
	);

export const searchLocationFetchErrorEpic = (action$) =>
	action$.pipe(ofType(`${SEARCHLOCATION} ${API_ERROR}`), map((action) => searchLocationSetError(action.payload)));
