import React from 'react';

import styles from './GifCard.module.css';

const GifCard = ({ img, caption }) => {
	return (
		<div className={styles.GifCard}>
			<figure>
				<img src={img} alt={caption} />
				<figcaption>{caption}</figcaption>
			</figure>
		</div>
	);
};

export default GifCard;