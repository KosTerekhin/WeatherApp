import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const SearchError = ({ message }) => (
	<Message negative>
		<Message.Header>{message}</Message.Header>
		<Icon name="frown outline" />
	</Message>
);

export default SearchError;
