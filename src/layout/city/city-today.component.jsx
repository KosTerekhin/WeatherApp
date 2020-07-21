import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Grid, Card, Image, Icon, Header } from 'semantic-ui-react';
import { selectCityCurrent, selectCityTimezone } from '../../redux/selectors/city.selectors';

import CityHomebtn from '../../assets/customButton/homebtn.component';

const CityTodayComponent = ({ timezone, current: { weather, temp } }) => (
	<Grid.Column mobile={12} tablet={4} computer={4}>
		<Grid.Row>
			<Header as="h2" className={[ 'no-wrap', 'main-header' ].join(' ')}>
				Today's weather
			</Header>
		</Grid.Row>

		<Card fluid>
			<Card.Content>
				<Image
					circular
					floated="right"
					size="tiny"
					src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
				/>
				<Card.Header className="main-header">
					<Icon name="thermometer" />
					{(+temp - 273.15).toFixed(1)}
				</Card.Header>
				<Card.Meta>
					<strong>{weather[0].description}</strong>
				</Card.Meta>
			</Card.Content>
			<Card.Content extra>
				<p>Timezone: {timezone}</p>
			</Card.Content>
		</Card>
		{/* MADE A CUTSOM BUTTOM
		BECAUSE SEMANTIC UI BUTTON THROWS AN ERROR */}
		<CityHomebtn bg="#21ba45" />
	</Grid.Column>
);

const mapToProps = createStructuredSelector({
	current: selectCityCurrent,
	timezone: selectCityTimezone
});

export default connect(mapToProps)(CityTodayComponent);
