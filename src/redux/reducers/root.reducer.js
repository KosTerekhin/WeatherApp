import { combineReducers } from 'redux';
import uiReducer from './ui.reducer';
import myLocationReducer from './my-location.reducer';
import searchLocationReducer from './search-location.reducer';
import cityReducer from './city.reducer';

const rootReducer = combineReducers({
	myLocation: myLocationReducer,
	searchLocation: searchLocationReducer,
	ui: uiReducer,
	city: cityReducer
});

export default rootReducer;
