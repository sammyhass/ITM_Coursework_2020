import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import styles from './Controls.module.css';

class Controls extends Component {
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
			this.props.pause();
		} else {
			this.props.play();
		}
	};
	render() {
		return (
			<div className={styles.Controls}>
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
						<FontAwesomeIcon icon={!this.state.playing ? faPlay : faPause} />
					</button>
					<p>
						{this.props.currentTime} / {this.props.duration}
					</p>
				</div>
			</div>
		);
	}
}

export default Controls;
