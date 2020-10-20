import React from 'react';
import HobbyGrid from '../components/HobbyGrid';

import styles from './Hobbies.module.css';

const Hobbies = () => {
	return (
		<div className={styles.Hobbies}>
			<h1>Here's what I do in my free time</h1>
			<HobbyGrid />
		</div>
	);
};

export default Hobbies;
