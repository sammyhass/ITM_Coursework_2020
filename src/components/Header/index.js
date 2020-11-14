import React from 'react';
import { useLocation } from 'react-router-dom';
import { useViewportWidth } from '../../hooks/viewport';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

import styles from './Header.module.css';

import Navbar from './Navbar';

const Header = () => {
	let location = useLocation();
	let width = useViewportWidth();
	return (
		<div className={styles.Header}>
			<div className={styles.InnerHeader}>
				<h1>
					{location.pathname === '/' ? 'Home' : location.pathname.slice(1)}
				</h1>
				<DarkModeToggle />
			</div>
			<Navbar width={width} />
		</div>
	);
};

export default Header;
