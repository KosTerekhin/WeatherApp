import { createSelector } from 'reselect';

export const selectSearchLocation = (state) => state.searchLocation;

export const selectSearchResults = createSelector([ selectSearchLocation ], (state) => state.cities);
export const selectSearchError = createSelector([ selectSearchLocation ], (state) => state.error);
