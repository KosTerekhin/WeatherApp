import { createSelector } from 'reselect';

export const selectUi = (state) => state.ui;

export const selectLoadingGlobal = createSelector([ selectUi ], (ui) => ui.loadingGlobal);
export const selectLoadingSearch = createSelector([ selectUi ], (ui) => ui.loadingSearch);
export const selectNotification = createSelector([ selectUi ], (ui) => ui.notification);
