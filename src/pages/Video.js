import React, { useEffect } from 'react';

import video from '../assets/Video.webm';

import styles from './Video.module.css';

const Video = () => {
	useEffect(() => {
		document.title = 'Video';
	}, []);
	return (
		<div className={styles.Video}>
			<figure>
				<video width="400" controls src={video} preload="true" />
				<figcaption>Music: Sober by Childish Gambino</figcaption>
			</figure>
		</div>
	);
};

export default Video;
