import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const MainpageContainer = () => {
	return (
		<Grid centered doubling columns={1}>
			<Grid.Row>
				<Grid.Column className="main-img">
					<Header textAlign="center" as="h1">
						Weather app
					</Header>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default MainpageContainer;
