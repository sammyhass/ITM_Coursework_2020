import React, { useEffect, useState } from 'react';

import FootballerAnimation from '../components/FootballerAnimation/FootballerAnimation';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import BrightonAudio from '../assets/Brighton.mp3';

import styles from './Animation.module.css';
import TetrisAnimation from '../components/TetrisAnimation/TetrisAnimation';
const Animation = () => {
	const [audioIsPlaying, setIsPlaying] = useState(false);
	const [animation, setAnimation] = useState(0);

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
			<h2>Press play to begin the animation!</h2>
			<button
				className={styles.AnimationChangeBtn}
				onClick={() => {
					animation === 1 ? setAnimation(0) : setAnimation(1);
				}}
			>
				Switch Animation
			</button>
			{animation === 1 ? (
				<>
					<FootballerAnimation audioIsPlaying={audioIsPlaying} />
					<AudioPlayer
						width={800}
						file={BrightonAudio}
						onAudioStart={onAudioStart}
						onAudioPause={onAudioPause}
					/>
				</>
			) : (
				<>
					<TetrisAnimation audioIsPlaying={audioIsPlaying} />
					<div>
						<AudioPlayer
							width={400}
							file={BrightonAudio}
							onAudioStart={onAudioStart}
							onAudioPause={onAudioPause}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Animation;
