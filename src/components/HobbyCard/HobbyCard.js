import React from 'react';

import styles from './HobbyCard.module.css';

const HobbyCard = ({ name, description, image, imageCredit }) => {
	return (
		<div className={styles.HobbyCard}>
			<img src={image} alt={description} />

			<h2>{name}</h2>
			<p>{description}</p>
		</div>
	);
};

export default HobbyCard;
