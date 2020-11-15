import React, { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';

import styles from './Card.module.css';

const HobbyCard = ({ name, description, image, imageCredit }) => {
	const darkMode = useDarkMode();
	const [boxShadow, setBoxShadow] = useState('2px 2px 5px #eee');
	useEffect(() => {
		setBoxShadow(darkMode.value ? 'none' : '2px 2px 5px #eee');
	}, [darkMode.value]);
	return (
		<div className={styles.HobbyCard} style={{ boxShadow: boxShadow }}>
			<img src={image} alt={description} />

			<h2>{name}</h2>
			<p>{description}</p>
			<a href={imageCredit}>Image Credit</a>
		</div>
	);
};

export default HobbyCard;
