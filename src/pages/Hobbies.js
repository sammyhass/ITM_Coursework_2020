import React, { useEffect } from 'react';
import Grid from '../components/Grid';

import styles from './Hobbies.module.css';

const Hobbies = () => {
	useEffect(() => {
		document.title = 'Hobbies';
	}, []);
	return (
		<div className={styles.Hobbies}>
			<h1>Here's what I do in my free time</h1>
			<Grid />
		</div>
	);
};

export default Hobbies;
