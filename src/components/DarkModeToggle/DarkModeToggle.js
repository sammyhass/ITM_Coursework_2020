import React, { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';

import styles from './DarkModeToggle.module.css';
import Raphael from 'raphael';
const DarkModeToggle = () => {
	const darkMode = useDarkMode(false);

	const animation = () => {
		let paper = Raphael('dm_container', 100, 25);
		paper.rect(0, 0, 98, 24);
		let indictatorCircle = paper.circle(darkMode.value ? 86 : 12, 12, 10);
		indictatorCircle.attr('fill', darkMode.value ? 'black' : 'white');

		indictatorCircle.click(async () => {
			indictatorCircle.animate({ cx: darkMode.value ? 12 : 86 }, 100, () =>
				darkMode.toggle()
			);
		});

		return () => {
			paper.remove();
			indictatorCircle.remove();
		};
	};
	useEffect(animation, [darkMode]);

	return (
		<div className={styles.DarkModeToggle}>
			Dark Mode
			<div id="dm_container"></div>
		</div>
	);
};

export default DarkModeToggle;
