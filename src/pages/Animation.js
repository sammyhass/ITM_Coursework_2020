import React, { useEffect } from 'react';

import FootballerAnimation from '../components/FootballerAnimation/FootballerAnimation';

import styles from './Animation.module.css';
const Animation = () => {
	useEffect(() => {
		document.title = 'Animation';
	}, []);
	return (
		<div className={styles.Animation}>
			<FootballerAnimation />
		</div>
	);
};

export default Animation;
