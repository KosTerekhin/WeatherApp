import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { cityFetch } from '../../redux/actions/city.actions';

import { selectLoadingGlobal, selectNotification } from '../../redux/selectors/ui.selectors';
import { redirectSuccess } from '../../redux/actions/ui.actions';

import useSpinner from '../../customHooks/spinner/useSpinner';
import CityComponent from './city.component';

const CityContainer = ({ match: { params }, cityFetch, loading, notificaiton, redirectSuccess }) => {
	useEffect(
		() => {
			window.onpopstate = () => {
				redirectSuccess();
			};
			console.log(params);
			cityFetch(params);
		},
		// eslint-disable-next-line
		[]
	);
	const { component } = useSpinner({
		loading,
		notificaiton,
		WrappedComponent: CityComponent
	});

	return component;
};

const mapToProps = createStructuredSelector({
	loading: selectLoadingGlobal,
	notificaiton: selectNotification
});

const dispatchProps = (dispatch) => ({
	cityFetch: (coords) => dispatch(cityFetch({ payload: coords })),
	redirectSuccess: () => dispatch(redirectSuccess())
});

export default compose(connect(mapToProps, dispatchProps), withRouter)(CityContainer);
