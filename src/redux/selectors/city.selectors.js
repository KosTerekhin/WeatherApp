import { createSelector } from 'reselect';

export const selectCity = (state) => state.city;

export const selectCityData = createSelector([ selectCity ], (state) => state.data);
export const selectCityCurrent = createSelector([ selectCityData ], (state) => state.current);
export const selectCityTimezone = createSelector([ selectCityData ], (state) => state.timezone);
export const selectCityDaily = createSelector([ selectCityData ], (state) => state.daily);
