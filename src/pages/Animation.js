import React, { useEffect, useState } from 'react';

import FootballerAnimation from '../components/FootballerAnimation/FootballerAnimation';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import BrightonAudio from '../assets/Brighton.mp3';

import styles from './Animation.module.css';
const Animation = () => {
	const [audioIsPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		document.title = 'Animation';
	}, []);

	const onAudioStart = () => {
		setIsPlaying(true);
	};

	const onAudioPause = () => {
		setIsPlaying(false);
	};

	return (
		<div className={styles.Animation}>
			<FootballerAnimation audioIsPlaying={audioIsPlaying} />
			<AudioPlayer
				file={BrightonAudio}
				onAudioStart={onAudioStart}
				onAudioPause={onAudioPause}
			/>
		</div>
	);
};

export default Animation;
