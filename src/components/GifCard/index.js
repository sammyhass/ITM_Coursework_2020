import React from 'react';

import styles from './GifCard.module.css';

const GifCard = ({ img }) => {
	return (
		<div className={styles.GifCard}>
			<figure>
				{img ? (
					<>
						<img
							onClick={() => {
								window.open(img.url, '_blank');
								window.focus();
							}}
							src={img.images.fixed_height.url}
							alt={img.title}
						/>
						<figcaption>{img.title}</figcaption>
					</>
				) : null}
			</figure>
		</div>
	);
};

export default GifCard;
