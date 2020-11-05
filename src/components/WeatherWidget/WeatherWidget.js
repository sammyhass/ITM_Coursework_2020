import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './WeatherWidget.module.css';

const WeatherWidget = () => {
	const [weatherData, setWeatherData] = useState();
	const [position, setPosition] = useState();
	const [error, setError] = useState();

	const kToC = k => Math.round(k - 273.15);

	useEffect(() => {
		(async () => {
			await navigator.geolocation.getCurrentPosition(
				pos =>
					setPosition({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
				err => setError(err),
				{ enableHighAccuracy: true }
			);
		})();
		console.log('Get Pos');
	}, []);

	useEffect(() => {
		(async () => {
			if (!position) return;
			if (error) return;
			await axios({
				url: 'http://api.openweathermap.org/data/2.5/weather',
				params: {
					lat: position.lat,
					lon: position.lon,
					appid: 'e137d001fec7011c14941a1179199188',
				},
			})
				.then(data => setWeatherData(data.data))
				.catch(e => setError(e));
		})();
	}, [position, error]);

	return weatherData ? (
		<div className={styles.WeatherWidget}>
			<h2>
				Weather in {weatherData.name}, {weatherData.sys.country}
			</h2>
			<div>
				<img
					src={
						'http://openweathermap.org/img/wn/' +
						weatherData.weather[0].icon +
						'@2x.png'
					}
					alt={weatherData.weather[0].description}
				/>
				<p>{weatherData.weather[0].main}</p>
				<p>{kToC(weatherData.main.temp) + '\u00B0C'}</p>
			</div>
		</div>
	) : error ? (
		<p>Something went wrong trying to retrieve weather data...</p>
	) : (
		<p>Loading</p>
	);
};

export default WeatherWidget;
