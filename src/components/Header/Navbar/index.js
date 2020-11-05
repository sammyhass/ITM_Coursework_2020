import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../../DarkModeToggle/DarkModeToggle';
import styles from './Navbar.module.css';

const Navbar = ({ width }) => {
	const [navbarOpen, setIsOpen] = useState(width < 751 ? false : true);

	useEffect(() => {
		if (width > 750) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [width]);
	const handleToggleNavbar = () => {
		setIsOpen(!navbarOpen);
	};

	return (
		<div className={width < 750 ? styles.NavbarMobile : styles.Navbar}>
			{width < 750 ? (
				<span className={styles.NavbarHamburger} onClick={handleToggleNavbar}>
					<div className={styles.NavbarIcon1}></div>
					<div className={styles.NavbarIcon2}></div>
					<div className={styles.NavbarIcon3}></div>
				</span>
			) : null}
			{navbarOpen ? (
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
					<DarkModeToggle />
				</ul>
			) : null}
		</div>
	);
};

export default Navbar;
