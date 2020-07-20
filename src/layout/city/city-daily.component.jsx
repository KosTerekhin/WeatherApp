import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Grid, Card, Image, Icon, Header } from 'semantic-ui-react';
import { selectCityDaily } from '../../redux/selectors/city.selectors';

const CityDailyComponent = ({ daily }) => (
	<Grid.Column mobile={12} tablet={10} computer={10}>
		<Grid centered>
			<Grid.Row className="pb-0">
				<Header as="h2" className="main-header">
					Forecasted weather
				</Header>
			</Grid.Row>

			{daily.map(({ dt, weather, temp: { day } }, i) => (
				<Grid.Column key={dt + i} mobile={14} tablet={8} computer={5}>
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
								{(+day - 273.15).toFixed(1)}
							</Card.Header>
							<Card.Header className="main-header">
								{+new Date(dt).toLocaleString('uk-UA', { day: 'numeric' }) + i + 1}th
							</Card.Header>
						</Card.Content>
					</Card>
				</Grid.Column>
			))}
		</Grid>
	</Grid.Column>
);

const mapToProps = createStructuredSelector({
	daily: selectCityDaily
});

export default connect(mapToProps)(CityDailyComponent);
