import React from 'react';
import useDarkMode from 'use-dark-mode';

import styles from './DarkModeToggle.module.css';
const DarkModeToggle = () => {
	const darkMode = useDarkMode(false);

	return (
		<div className={styles.DarkModeToggle}>
			{darkMode.value ? (
				<button type="button" onClick={darkMode.disable}>
					☀
				</button>
			) : (
				<button type="button" onClick={darkMode.enable}>
					☾
				</button>
			)}
		</div>
	);
};

export default DarkModeToggle;
