import React from 'react';

import styles from './Coursework.module.css';

const Coursework = () => {
	return (
		<div className={styles.Coursework}>
			<h2>Labs</h2>
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
		</div>
	);
};

export default Coursework;
