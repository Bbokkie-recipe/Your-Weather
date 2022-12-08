import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities }) => {
	return (
		<div className='cityButtonGroup'>
			{cities.map((item) => (<Button variant="primary">{item}</Button>))}
		</div>
	)
}

export default WeatherButton