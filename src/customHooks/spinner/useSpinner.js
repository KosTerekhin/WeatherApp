import React, { useState, useEffect } from 'react';
import { Message, Icon, Grid, Container } from 'semantic-ui-react';

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
				<Message negative size="huge">
					<Container textAlign="center">
						<Message.Header>{notificaiton}</Message.Header>
					</Container>
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
