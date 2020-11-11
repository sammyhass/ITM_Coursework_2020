import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GifCard from '../components/GifCard';
import WeatherWidget from '../components/WeatherWidget/WeatherWidget';

import styles from './Home.module.css';

const Home = () => {
	const [gifs, setGifs] = useState();
	const [gif, setGif] = useState();
	useEffect(() => {
		document.title = 'Home';
		const getGif = async () => {
			await axios
				.get('https://api.giphy.com/v1/gifs/trending', {
					params: {
						api_key: 'WSZlOvWP90tv5bERnuKXNutnipA4BEUm',
						limit: 10,
					},
				})
				.catch(e => console.log(e))
				.then(data => {
					setGifs(data.data.data);
					setGif(0);
				});
		};

		getGif();
	}, []);

	useEffect(() => {
		if (gif < 0) {
			setGif(9);
		}
		if (gif > 9) {
			setGif(0);
		}
	}, [gif]);

	return (
		<div className={styles.Home}>
			<div className={styles.HomeLeft}>
				<h1>Intro to Multimedia Coursework</h1>
				{gifs ? (
					<>
						<div className={styles.GifButtons}>
							<button onClick={() => setGif(gif + 1)}>&larr;</button>
							<button onClick={() => setGif(gif - 1)}>&rarr;</button>
						</div>
						<GifCard img={gifs[gif]} />
					</>
				) : null}
			</div>
			<div className={styles.HomeRight}>
				<h2>This is the home page</h2>
				<p>
					Welcome to my coursework. This is the home page, feel free to browse
					around the website. Check out my animation, my hobbies, my
					introductory video and my coursework. Below you'll find the current
					weather for your location. The GIF included on this page is taken from
					the trending section of <a href="https://giphy.com/">Giphy</a>. You
					can check out other trending gifs using the arrow buttons above the
					image.
				</p>
				<WeatherWidget />
			</div>
		</div>
	);
};

export default Home;
