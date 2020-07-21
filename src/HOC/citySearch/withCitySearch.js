import React, { Fragment } from 'react';
import SearchComponent from '../../layout/search/search.component';

const withCitySearch = (WrappedComponent) => ({ ...otherProps }) => (
	<Fragment>
		<WrappedComponent {...otherProps} />
		<SearchComponent />
	</Fragment>
);

export default withCitySearch;
