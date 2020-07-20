import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Grid, Icon } from 'semantic-ui-react';
import { redirectorClient } from '../../redux/actions/ui.actions';

import { HomeBtn } from './homebtn.styles';

const HomebtnComponent = ({ redirectorClient, history, bg }) => {
	return (
		<Grid.Row>
			<HomeBtn
				bg={bg}
				fluid
				onClick={() =>
					redirectorClient({
						route: '/',
						history
					})}
			>
				{' '}
				<Icon name="long arrow alternate left" /> Return home
			</HomeBtn>
		</Grid.Row>
	);
};

const dispatchProps = (dispatch) => ({
	redirectorClient: ({ route, history }) => dispatch(redirectorClient({ route, history }))
});

export default compose(connect(null, dispatchProps), withRouter)(HomebtnComponent);
