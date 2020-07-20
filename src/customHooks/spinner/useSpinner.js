import React, { useState, useEffect } from 'react';
import { Message, Icon, Grid } from 'semantic-ui-react';

import SpinnerComponent from '../../assets/spinner/spinner.component';

const useSpinner = ({ loading, WrappedComponent, notificaiton } = {}) => {
	const [ mounted, setState ] = useState(false);

	let component = <WrappedComponent />;

	useEffect(
		() => {
			loading && setState(true);
		},
		[ loading ]
	);

	if (notificaiton) {
		return {
			component: (
				<Message negative>
					<Message.Header>{notificaiton}</Message.Header>
				</Message>
			)
		};
	}

	if (!loading && !mounted) {
		return {
			component: (
				<Grid centered>
					waiting for location...
					<div>
						<Icon loading name="sun outline" />
					</div>
				</Grid>
			)
		};
	}

	if (loading) {
		return { component: <SpinnerComponent /> };
	}

	return { component };
};

export default useSpinner;
