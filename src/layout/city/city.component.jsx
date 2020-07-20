import React from 'react';
import { Grid } from 'semantic-ui-react';

import CityDaily from './city-daily.component';
import CityToday from './city-today.component';

const CityComponent = () => (
	<Grid centered columns={2}>
		<CityToday />
		<CityDaily />
	</Grid>
);

export default CityComponent;
