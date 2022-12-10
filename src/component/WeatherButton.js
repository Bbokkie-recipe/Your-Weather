import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {
	return (
		<div className='cityButtonGroup'>
			{cities.map((item, index) => (<Button variant="primary" key={index}
				onClick={() => {
					setCity(item)
				}}
			>{item}</Button>))}
		</div>
	)
}

export default WeatherButton

