import { createSelector } from 'reselect';

export const selectMyLocation = (state) => state.myLocation;

export const selectMyLocationData = createSelector([ selectMyLocation ], (myLocation) => myLocation.data);
export const selectLocationSelected = createSelector([ selectMyLocation ], (myLocation) => myLocation.locationSelected);
