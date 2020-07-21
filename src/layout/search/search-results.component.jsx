import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { selectSearchResults, selectSearchError } from '../../redux/selectors/search-location.selectors';

import SearchItems from './search-results-items.component';
import SearchError from './search-results-error.component';

const SearchResults = ({ cities, error }) => {
	if (error) {
		return <SearchError message={error} />;
	}

	return (
		<List>{cities ? cities.length > 0 ? <SearchItems /> : <SearchError message="0 results found" /> : null}</List>
	);
};

const mapToProps = createStructuredSelector({
	cities: selectSearchResults,
	error: selectSearchError
});

export default connect(mapToProps)(SearchResults);
