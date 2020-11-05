import { useState, useEffect } from 'react';

export const useViewportWidth = () => {
	const [viewportWidth, setViewportWidth] = useState(null);

	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, [viewportWidth]);

	return viewportWidth;
};
