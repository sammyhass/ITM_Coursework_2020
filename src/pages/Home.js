import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GifCard from '../components/GifCard';
import WeatherWidget from '../components/WeatherWidget/WeatherWidget';

import styles from './Home.module.css';

const Home = () => {
	const [gifs, setGifs] = useState();
	const [gif, setGif] = useState();
	useEffect(() => {
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
						<GifCard img={gifs[gif]} />
						<div className={styles.GifButtons}>
							<button onClick={() => setGif(gif + 1)}>&larr;</button>
							<button onClick={() => setGif(gif - 1)}>&rarr;</button>
						</div>
					</>
				) : null}
			</div>
			<div className={styles.HomeRight}>
				<h2>This is the home page</h2>
				<p>
					Incididunt est velit anim in ullamco nostrud cupidatat incididunt
					nulla dolore sint. Lorem fugiat incididunt occaecat aute culpa
					consequat cupidatat ad cillum commodo enim. Elit eu enim amet sint
					aliquip irure ipsum deserunt do consectetur occaecat consequat
					laboris. Laborum ut sint consectetur voluptate pariatur ex eiusmod
					nulla eu aute pariatur. Labore dolor veniam nisi sit. Reprehenderit
					aliquip fugiat dolor anim excepteur incididunt aliqua est pariatur
					cillum ea ex sint. Voluptate non in sunt id ea cillum esse excepteur.
					Magna eu dolore ad laboris. Qui nulla irure minim aute aliquip
					consectetur incididunt in esse ipsum officia do dolore quis.
				</p>
				<WeatherWidget />
			</div>
		</div>
	);
};

export default Home;
