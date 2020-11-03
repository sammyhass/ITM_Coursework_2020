import React from 'react';

import styles from './Coursework.module.css';

import img from '../assets/PSD_Lab.jpg';
const Coursework = () => {
	return (
		<div className={styles.Coursework}>
			<h1>Labs</h1>
			<div className={styles.CourseworkDisplay}>
				<ul>
					<li>
						<a href="http://users.sussex.ac.uk/~sh858/IM/labwork/Bounce/">
							Bounce (Lab 4)
						</a>
					</li>
					<li>
						<a href="http://users.sussex.ac.uk/~sh858/IM/labwork/HtmlCssLab/">
							HTML and CSS Lab (Lab 3)
						</a>
					</li>
				</ul>
				<figure>
					<img alt={'Photoshop Lab'} src={img} />
					<figcaption>Photoshop Lab</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default Coursework;
