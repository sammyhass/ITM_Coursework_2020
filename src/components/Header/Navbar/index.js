import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.Navbar}>
			<ul>
				<li>
					<NavLink exact to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/video">Video</NavLink>
				</li>
				<li>
					<NavLink to="/hobbies">Hobbies</NavLink>
				</li>
				<li>
					<NavLink to="/coursework">Coursework</NavLink>
				</li>
				<li>
					<NavLink to="/animation">Animation</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
