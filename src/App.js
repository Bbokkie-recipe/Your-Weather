import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from "./component/WaetherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [userWeather, setUserWeather] = useState(null);
	const [city, setCity] = useState("Your Weather");
	const cities = ['Your Weather', 'new york', 'toronto', 'paris', 'rondon'];
	let [loading, setLoading] = useState(false);


	const getCurrentLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;
				getWeatherByCurrentLocation(latitude, longitude);
			});
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}

	const getWeatherByCurrentLocation = async (lat, lon) => {
		let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b13282392fd34dd9436686c7c7ecda83&units=metric`;
		setLoading(true);
		let response = await fetch(url) 
		let data = await response.json(); 
		setUserWeather(data);
		setLoading(false);
		console.log(data);
	}

	const getWeatherByCity = async () => {
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b13282392fd34dd9436686c7c7ecda83&units=metric`;
		setLoading(true);
		let response = await fetch(url) 
		let data = await response.json();
		setUserWeather(data);
		setLoading(false);
		console.log(data);
	}

	useEffect(() => {
		if (city == "Your Weather") {
			getCurrentLocation();
		} else {
			getWeatherByCity('city', city);
		}
	}, [city]);


	return (
		<div>
			{loading ? <div className='main'>
				<ClipLoader className='react-spinners'
					color="#ffffff"
					loading={loading}
					size={150}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
				<WeatherBox weather={null} />
				<WeatherButton cities={cities} setCity={setCity} loading={loading} setLoading={setLoading} />
			</div> :
				<div className='main'>
					<WeatherBox weather={userWeather} />
					<WeatherButton cities={cities} setCity={setCity} loading={loading} setLoading={setLoading} />
				</div>}
			<div>
			</div>
		</div >
	);
}

export default App;
