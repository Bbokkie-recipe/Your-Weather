import React from 'react'

const WaetherBox = ({ weather }) => {
	return (
		<div className='weather-info-parents'>
			<div className='weather-info'>
				<h3 className='weather-info-text'>도시 {weather?.name}</h3>
				<h2 className='weather-info-text'>지금 온도 {weather?.main?.temp} / 습도 {weather?.main?.humidity}</h2>
				<h2 className='weather-info-text'>너의 날씨는? {weather?.weather[0]?.description}</h2>
			</div>
		</div>
	)
}

export default WaetherBox