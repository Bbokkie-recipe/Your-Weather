import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = (props) => {
	return (
		<div>
			<Button variant="primary">{props.title}</Button>
		</div>
	)
}

export default WeatherButton