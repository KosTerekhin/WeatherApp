import { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { myLocationFetch } from '../../redux/actions/my-location.actions';
import { selectLoadingGlobal, selectNotification } from '../../redux/selectors/ui.selectors';
import { redirectSuccess } from '../../redux/actions/ui.actions';

import useSpinner from '../../customHooks/spinner/useSpinner';
import MyLocationComponent from './my-location.component.jsx';

const MyLocationContainer = ({ myLocationFetch, loading, notificaiton, redirectSuccess }) => {
	// Created sepate functions
	// in case we want to run different functions
	// for each scenario
	const location = (position) => {
		myLocationFetch(position);
	};
	// by dipatching undefined, the action
	// will use default location
	const err = () => {
		myLocationFetch(undefined);
	};

	useEffect(
		() => {
			// CANCELLING API REQUESTS ON BACK AND NEXT BROSWER CLICKS
			window.onpopstate = () => {
				redirectSuccess();
			};

			window.navigator.geolocation.getCurrentPosition(location, err);
		},
		// eslint-disable-next-line
		[]
	);
	const { component } = useSpinner({
		loading,
		notificaiton,
		WrappedComponent: MyLocationComponent
	});

	return component;
};

const mapToProps = createStructuredSelector({
	loading: selectLoadingGlobal,
	notificaiton: selectNotification
});

const dispatchProps = (dispatch) => ({
	myLocationFetch: (position) => dispatch(myLocationFetch({ payload: position })),
	redirectSuccess: () => dispatch(redirectSuccess())
});

export default connect(mapToProps, dispatchProps)(MyLocationContainer);
