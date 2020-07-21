import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List, Divider } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { selectSearchResults } from '../../redux/selectors/search-location.selectors';
import { redirectorClient } from '../../redux/actions/ui.actions';

const SearchItems = ({ redirectorClient, cities, history }) => {
	return (
		<Fragment>
			{cities.map(({ name, country, lat, lng: lon }, index) => (
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
			))}
		</Fragment>
	);
};

const mapToProps = createStructuredSelector({
	cities: selectSearchResults
});

const dispatchProps = (dispatch) => ({
	redirectorClient: ({ route, history }) => dispatch(redirectorClient({ route, history }))
});

export default compose(connect(mapToProps, dispatchProps), withRouter)(SearchItems);
