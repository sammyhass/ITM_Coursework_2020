import React, { useEffect } from 'react';

const Video = () => {
	useEffect(() => {
		document.title = 'Video';
	}, []);
	return <div>Video</div>;
};

export default Video;
