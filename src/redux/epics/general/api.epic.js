import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of, from, concat } from 'rxjs';
import { mergeMap, switchMap, debounceTime, catchError, takeUntil, filter, distinctUntilChanged } from 'rxjs/operators';
import { API_REQUEST, API_CUSTOM_REQUEST, apiSuccess, apiError } from '../../actions/api.actions';
import {
	searchLocationClearError,
	SEARCHLOCATION,
	SEARCHLOCATION_DEBOUNCE
} from '../../actions/search-location.actions';
import {
	setGlobalLoading,
	clearGlobalLoading,
	setSearchLoading,
	clearSearchLoading,
	clearNotification,
	UI_REDIRECT
} from '../../actions/ui.actions';

const ajaxer = ({ body: data, meta: { url, method, contentType } }) =>
	ajax({
		method,
		url,
		data,
		contentType,
		crossDomain: true
	});

// Will handle regular GET/PUT/POST/ect. calls
export const apiEpic = (action$) =>
	action$.pipe(
		filter((action) => action.type.includes(API_REQUEST)),
		switchMap((action) =>
			// creating a stream of actions
			concat(
				// first - handling UI updates
				of(setGlobalLoading(), clearNotification()),
				// 2nd - api calls
				from(
					ajaxer(action).pipe(
						mergeMap(({ response }) =>
							of(
								apiSuccess({
									data: response,
									feature: action.meta.feature
								}),
								clearGlobalLoading()
							)
						),
						catchError(() => of(apiError({ feature: action.meta.feature }), clearGlobalLoading())),
						// ON REDIRECT - cancel all pending API calls
						takeUntil(action$.pipe(filter(({ type }) => type.includes(UI_REDIRECT))))
					)
				)
			)
		)
	);

// CUSTOM API CALLS
// both api epics are similar
// but i wanted to separate them
// because this epic will most likely be changed
// the regular apiEpic will probably stay the same
export const apiSearchEpic = (action$) =>
	action$.pipe(
		ofType(`${SEARCHLOCATION} ${API_CUSTOM_REQUEST}`),
		// creating delay for typing
		// and filter for unique requests only
		debounceTime(SEARCHLOCATION_DEBOUNCE.debounceTime),
		distinctUntilChanged(),
		switchMap((action) =>
			concat(
				of(setSearchLoading(), searchLocationClearError()),
				from(
					ajaxer(action).pipe(
						mergeMap(({ response }) =>
							of(
								apiSuccess({
									data: response,
									feature: action.meta.feature
								}),
								clearSearchLoading()
							)
						),
						catchError(({ message }) =>
							of(apiError({ error: message, feature: action.meta.feature }), clearSearchLoading())
						),
						// ON REDIRECT - cancel all pending API calls
						takeUntil(action$.pipe(filter(({ type }) => type.includes(UI_REDIRECT))))
					)
				)
			)
		)
	);
