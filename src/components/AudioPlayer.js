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
		this.audioRef.current.onloadedmetadata = () => {
			this.setState({ duration: Math.ceil(this.audioRef.current.duration) });
		};
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
					getCurrentTime={this.getCurrentTime}
					duration={this.state.duration}
				/>
			</div>
		);
	}
}

export default AudioPlayer;
