import React, { Component } from 'react';

import PlayerControls from './PlayerControls';
import styles from './AudioPlayer.module.css';

class AudioPlayer extends Component {
	state = {
		currentTime: 0,
		isPaused: true,
		duration: 0,
	};
	constructor(props) {
		super(props);
		this.audioRef = React.createRef();
	}

	componentDidMount = () => {
		this.currentTimeInterval = 0;
		this.audioRef.current.onloadedmetadata = () => {
			this.setState({
				duration: Math.ceil(this.audioRef.current.duration),
			});
		};

		setInterval(() => {
			this.currentTimeInterval = setInterval(() => {
				this.updateCurrentTime();
			}, 500);
		});
	};

	componentWillUnmount() {
		this.audioPause();
	}

	updateCurrentTime = () => {
		if (!this.audioRef.current) return;
		this.setState({
			currentTime: Math.ceil(this.audioRef.current.currentTime),
		});
	};

	resetCurrentTime = () => {
		this.audioRef.current.currentTime = 0;
		this.updateCurrentTime();
	};

	audioPlay = () => {
		this.setState({
			isPaused: false,
		});
		this.audioRef.current.play();
	};

	audioPause = () => {
		this.setState({
			isPaused: true,
		});
		this.audioRef.current.pause();
	};

	getCurrentTime = () => {
		return this.audioRef.current.currentTime;
	};

	getIsPaused = () => {
		return this.audioRef.current.paused;
	};

	setPaused = isPaused => {
		this.audioRef.current.paused = isPaused;
	};

	changeTime = time => {
		this.audioRef.current.currentTime = time;
	};

	render() {
		return (
			<div className={styles.AudioPlayer}>
				<audio
					id="player"
					preload="metadata"
					src={this.props.file}
					ref={this.audioRef}
				></audio>
				<PlayerControls
					audioPlay={this.audioPlay}
					audioPause={this.audioPause}
					currentTime={this.state.currentTime}
					duration={this.state.duration}
					updateCurrentTime={this.updateCurrentTime}
					resetCurrentTime={this.resetCurrentTime}
					changeTime={this.changeTime}
				/>
			</div>
		);
	}
}

export default AudioPlayer;
