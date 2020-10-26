import React, { Component } from 'react';

import styles from './PlayerControls.module.css';

class PlayerControls extends Component {
	state = {
		playing: false,
	};

	componentDidMount() {
		this.props.updateCurrentTime();
	}

	playPauseClicked = () => {
		const currentlyPlaying = this.state.playing;
		this.setState({ playing: !this.state.playing });
		if (currentlyPlaying) {
			this.props.audioPause();
		} else {
			this.props.audioPlay();
		}
	};
	render() {
		return (
			<div className={styles.PlayerControls}>
				<div className={styles.leftControls}>
					<button onClick={this.playPauseClicked}>
						{!this.state.playing ? '▶️' : '⏸'}
					</button>
					<p>
						{this.props.currentTime} / {this.props.duration}
					</p>
				</div>
				<div
					className={styles.audioProgress}
					style={{
						width: (this.props.currentTime / this.props.duration) * 80 + '%',
					}}
				></div>
			</div>
		);
	}
}

export default PlayerControls;
