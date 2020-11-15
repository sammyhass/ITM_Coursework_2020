import React, { useEffect } from 'react';

import video from '../assets/CourseworkIntro.mp4';

import styles from './Video.module.css';

const Video = () => {
	useEffect(() => {
		document.title = 'Video';
	}, []);
	return (
		<div className={styles.Video}>
			<figure>
				<video width="400" controls src={video} preload="true" />
			</figure>
		</div>
	);
};

export default Video;
