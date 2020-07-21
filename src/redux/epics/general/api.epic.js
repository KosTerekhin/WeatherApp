import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of, from, concat } from 'rxjs';
import { mergeMap, switchMap, debounceTime, catchError, takeUntil, filter } from 'rxjs/operators';
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

export const apiEpic = (action$) =>
	action$.pipe(
		filter((action) => action.type.includes(API_REQUEST)),
		switchMap((action) =>
			concat(
				of(setGlobalLoading(), clearNotification()),
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
						takeUntil(action$.pipe(filter(({ type }) => type.includes(UI_REDIRECT))))
					)
				)
			)
		)
	);

export const apiSearchEpic = (action$) =>
	action$.pipe(
		ofType(`${SEARCHLOCATION} ${API_CUSTOM_REQUEST}`),
		debounceTime(SEARCHLOCATION_DEBOUNCE.debounceTime),
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
						takeUntil(action$.pipe(filter(({ type }) => type.includes(UI_REDIRECT))))
					)
				)
			)
		)
	);
