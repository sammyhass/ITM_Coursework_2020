import React from 'react';
import GifCard from '../components/GifCard';

import styles from './Home.module.css';

const Home = () => {
	return (
		<div className={styles.Home}>
			<div className={styles.HomeLeft}>
				<h1>Intro to Multimedia Coursework</h1>
				<GifCard
					img="https://media.giphy.com/media/l2R05cXal4YGdBRQI/source.gif"
					caption="This is a caption"
				/>
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
			</div>
		</div>
	);
};

export default Home;
