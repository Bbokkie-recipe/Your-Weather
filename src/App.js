import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from "./component/WaetherBox";
import WeatherButton from "./component/WeatherButton";
import 'bootstrap/dist/css/bootstrap.min.css';

//1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
//2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태
//3. 5개의 버튼이 있다 (1개는 현재 위치, 4개는 다른 도시)
//4. 로딩 스피너 기능 추가

function App() {
	const [userWeather, setUserWeather] = useState(null);

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

	//await 쓰고자 하는 함수는 async 여야 한다! 
	const getWeatherByCurrentLocation = async (lat, lon) => {
		let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=&units=metric`;
		let response = await fetch(url) //비동기(직독: url을 patch하는 것을 기다려달라!) : url 로딩한 뒤 응답값을 받기로 함
		let data = await response.json(); //응답에서 json 추출하는 것을 기다려달라
		setUserWeather(data);
		console.log(data);
	}

	useEffect(() => {
		getCurrentLocation()
	}, []);

	return (
		<div>
			<div className='main'>

				<WeatherBox weather={userWeather} />

				<div className='cityButtonGroup'>
					<WeatherButton title="Your Weather" />
					<WeatherButton title="NewYork" />
					<WeatherButton title="Toronto" />
					<WeatherButton title="Paris" />
					<WeatherButton title="Rondon" />
				</div>
			</div>
			<div>
			</div>
		</div >
	);
}

export default App;
