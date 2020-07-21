import React from 'react';

import { Grid, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import HomeBtn from '../../assets/customButton/homebtn.component';

const NotFoundComponent = () => (
	<Grid centered>
		<Grid.Column width={8}>
			<Message size="massive" negative>
				<Message.Header style={{ marginBottom: '20px', textAlign: 'center' }}>
					404 PAGE DOES NOT EXIST
				</Message.Header>
				{/* MADE A CUTSOM BUTTOM
				BECAUSE SEMANTIC UI BUTTON THROWS AN ERROR */}
				<Link to="/">
					<HomeBtn bg="#00b5ad">Home</HomeBtn>
				</Link>
			</Message>
		</Grid.Column>
	</Grid>
);

export default NotFoundComponent;
