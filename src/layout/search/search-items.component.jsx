import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Message, Icon, Divider } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { selectSearchResults } from '../../redux/selectors/search-location.selectors';
import { redirectorClient } from '../../redux/actions/ui.actions';

import { List } from 'semantic-ui-react';

const SearchItems = ({ redirectorClient, cities, history }) => (
	<List>
		{cities ? cities.length > 0 ? (
			cities.map(({ name, country, lat, lng: lon }, index) => (
				<List.Item key={lat + index}>
					<Divider horizontal inverted>
						-
					</Divider>
					<List.Content>
						<List.Header
							as="a"
							onClick={() =>
								redirectorClient({
									route: `/city/${lat}/${lon}`,
									history
								})}
						>
							{name}
						</List.Header>
						<List.Description>
							<b>City in {country}</b>
						</List.Description>
						<List.Description>
							<b>
								Coordinates: {lat} / {lon}
							</b>
						</List.Description>
					</List.Content>
				</List.Item>
			))
		) : (
			<Message negative>
				<Message.Header>0 results found</Message.Header>
				<Icon name="frown outline" />
			</Message>
		) : null}
	</List>
);

const mapToProps = createStructuredSelector({
	cities: selectSearchResults
});

const dispatchProps = (dispatch) => ({
	redirectorClient: ({ route, history }) => dispatch(redirectorClient({ route, history }))
});

export default compose(connect(mapToProps, dispatchProps), withRouter)(SearchItems);
