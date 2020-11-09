import React from 'react';

import styles from './GifCard.module.css';

const GifCard = ({ img, caption }) => {
	return (
		<div className={styles.GifCard}>
			<figure>
				{img ? (
					<>
						<img
							onClick={() => {
								window.open(img, '_blank');
								window.focus();
							}}
							src={img.images.fixed_height.url}
							alt={img}
						/>
						<figcaption>{img.title}</figcaption>
					</>
				) : null}
			</figure>
		</div>
	);
};

export default GifCard;
