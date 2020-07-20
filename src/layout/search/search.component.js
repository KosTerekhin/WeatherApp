import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { searchLocationFetch } from '../../redux/actions/search-location.actions';
import { selectLoadingSearch } from '../../redux/selectors/ui.selectors';
import { Grid, Input, Icon, Header } from 'semantic-ui-react';

import SearchItems from './search-items.component';

const SearchComponent = ({ searchLocationFetch, loading }) => {
	const ref = useRef(null);

	return (
		<Grid centered>
			<Grid.Column mobile={12} tablet={8} computer={6}>
				<Header as="h3">Search cities</Header>
				<Input loading={loading} fluid icon placeholder="3 letters or more to start">
					<Icon name="search" />
					<input ref={ref} onChange={() => searchLocationFetch(ref.current.value)} />
				</Input>
				<SearchItems />
			</Grid.Column>
		</Grid>
	);
};

const mapToProps = createStructuredSelector({
	loading: selectLoadingSearch
});

const dispatchProps = (dispatch) => ({
	searchLocationFetch: (value) => dispatch(searchLocationFetch({ payload: value }))
});

export default connect(mapToProps, dispatchProps)(SearchComponent);
