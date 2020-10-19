import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Header.module.css';

import Navbar from './Navbar';

const Header = () => {
	let location = useLocation();
	return (
		<div className={styles.Header}>
			<Navbar />
			<h1>{location.pathname == '/' ? 'Home' : location.pathname.slice(1)}</h1>
		</div>
	);
};

export default Header;
