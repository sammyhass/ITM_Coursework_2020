import React, { useEffect } from 'react';

import video from '../assets/Video.webm';

import styles from './Video.module.css';

const Video = () => {
	useEffect(() => {
		document.title = 'Video';
	}, []);
	return (
		<div className={styles.Video}>
			<video width="400" controls src={video} preload="true" />
		</div>
	);
};

export default Video;
