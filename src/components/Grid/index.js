import React from 'react';

import hobbies from '../../data/hobbies.json';

import HobbyCard from './Card';

import styles from './Grid.module.css';

const HobbyGrid = () => {
	const renderedCards = hobbies.map(hobby => (
		<HobbyCard
			name={hobby.name}
			description={hobby.description}
			image={hobby.image}
			key={hobby.name}
		/>
	));

	return <div className={styles.HobbyGrid}>{renderedCards}</div>;
};

export default HobbyGrid;
