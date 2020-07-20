import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { CLIENT } from '../../globalVariables/actions.global';
import { UI_REDIRECT, redirectSuccess } from '../../actions/ui.actions';

export const uiRedirectEpic = (action$) =>
	action$.pipe(
		ofType(`${CLIENT} ${UI_REDIRECT}`),
		map(({ route, history }) => {
			history.push(`${route}`);
			return redirectSuccess();
		})
	);
