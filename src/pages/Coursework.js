import React from 'react';

import styles from './Coursework.module.css';

const Coursework = () => {
	return (
		<div className={styles.Coursework}>
			<h2>Labs</h2>
			<ul>
				<li>
					<a href="/Bounce/">Lab 4 - Bounce</a>
				</li>
				<li>
					<a href="/HtmlCssLab">Lab 3 - HTML and CSS</a>
				</li>
			</ul>
		</div>
	);
};

export default Coursework;
