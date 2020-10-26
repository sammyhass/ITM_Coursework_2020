import React, { useState } from 'react';

import styles from './PlayerControls.module.css';

const PlayerControls = ({
	audioPlay,
	audioPause,
	getCurrentTime,
	duration,
}) => {
	const [playing, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const playPauseClicked = () => {
		const interval = () => {
			setCurrentTime(Math.ceil(getCurrentTime()));
		};
		const currentlyPlaying = playing;
		setIsPlaying(!playing);
		if (currentlyPlaying) {
			clearInterval(interval);
			audioPause();
		} else {
			setInterval(interval, 1000);
			audioPlay();
		}
	};

	return (
		<div className={styles.PlayerControls}>
			<div className={styles.leftControls}>
				<button onClick={playPauseClicked}>{!playing ? '▶️' : '⏸'}</button>
				<p>
					{currentTime} / {duration}
				</p>
			</div>
			<div
				className={styles.audioProgress}
				style={{
					width: (currentTime / duration) * 80 + '%',
				}}
			></div>
		</div>
	);
};

export default PlayerControls;
