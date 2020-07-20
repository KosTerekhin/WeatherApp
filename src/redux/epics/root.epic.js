import { combineEpics } from 'redux-observable';
import { myLocationEpic, myLocationFetchSuccessEpic, myLocationFetchErrorEpic } from './core/my-location.epic';
import {
	searchLocationEpic,
	searchLocationFetchSuccessEpic,
	searchLocationFetchErrorEpic
} from './core/search-location.epic';
import { cityEpic, cityFetchSuccessEpic, cityFetchErrorEpic } from './core/city.epic';
import { apiEpic, apiSearchEpic } from './general/api.epic';
import { uiRedirectEpic } from './general/ui.epic';

export default combineEpics(
	myLocationEpic,
	myLocationFetchSuccessEpic,
	myLocationFetchErrorEpic,
	searchLocationEpic,
	searchLocationFetchSuccessEpic,
	searchLocationFetchErrorEpic,
	cityEpic,
	cityFetchSuccessEpic,
	cityFetchErrorEpic,
	apiEpic,
	apiSearchEpic,
	uiRedirectEpic
);
