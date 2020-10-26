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
				<div>
					<input
						type="range"
						min={0}
						max={this.props.duration}
						value={this.props.currentTime}
						className={styles.slider}
						onChange={e => this.props.changeTime(e.target.value)}
					/>
				</div>
				<div className={styles.AdditionalControls}>
					<button onClick={this.playPauseClicked}>
						{!this.state.playing ? '▶️' : '⏸'}
					</button>
					<p>
						{this.props.currentTime} / {this.props.duration}
					</p>
				</div>
			</div>
		);
	}
}

export default PlayerControls;
