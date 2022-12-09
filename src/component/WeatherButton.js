import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {
	//어떠한 state도 없다. 얘는 그냥 App이 주는 것만 쓸거임.
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

