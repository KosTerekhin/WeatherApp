import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';

import { selectMyLocationData } from '../../redux/selectors/my-location.selectors';

import withCitySearch from '../../HOC/citySearch/withCitySearch';

const MyLocationComponent = ({ data: { weather, name, sys: { country }, main: { temp, temp_max, temp_min } } }) => (
	<Grid centered>
		<Grid.Row>
			<Grid.Column mobile={12} tablet={6} computer={4}>
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
						<Card.Description>
							<p>
								{' '}
								<Icon name="long arrow alternate up" />maximal: {(+temp_max - 273.15).toFixed(1)}
							</p>
							<p>
								{' '}
								<Icon name="long arrow alternate down" />minimal: {(+temp_min - 273.15).toFixed(1)}
							</p>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<p>{name}</p>
						<p>{country}</p>
					</Card.Content>
				</Card>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

const mapToProps = createStructuredSelector({
	data: selectMyLocationData
});

export default compose(connect(mapToProps), withCitySearch)(MyLocationComponent);
