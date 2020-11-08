import React, { useEffect } from 'react';

import Raphael from 'raphael';

import footballImage from '../../assets/animation/Ball.png';
import footballerRun from '../../assets/animation/Footballer.gif';
import footballerKick from '../../assets/animation/Kicking.gif';
import goalImage from '../../assets/animation/Goal.png';
import useDarkMode from 'use-dark-mode';

const FootballerAnimation = () => {
	const darkMode = useDarkMode();

	const animation = () => {
		let paper = Raphael('animation_container', 800, 600);
		let background = paper.rect(0, 0, 800, 600);
		background.attr('fill', darkMode.value ? 'midnightblue' : 'skyblue');

		let skyBulb = paper.circle(730, 70, 40);
		skyBulb.attr('fill', darkMode.value ? 'lightgrey' : 'yellow');

		let grass = paper.rect(0, 400, 800, 200);
		grass.attr('fill', 'green');

		let football = paper.image(footballImage, 210, 400, 37, 37);
		football.hide();

		let goal = paper.image(goalImage, 450, 275, 400, 300);
		goal.toBack();
		grass.toBack();
		background.toBack();

		let runningPlayer = paper.image(footballerRun, -200, 300, 200, 180);
		let kickingPlayer = paper.image(footballerKick, 50, 300, 200, 180);
		kickingPlayer.hide();

		const runForward = () => {
			football.animate({ x: 210, y: 400 });
			football.hide();
			runningPlayer.animate({ x: 100 }, 1000, 'ease-in', kick);
		};

		const kick = () => {
			runningPlayer.hide();
			kickingPlayer.show();
			setTimeout(() => {
				football.show();
			}, 280);

			football.animate({ x: 700, y: 350 }, 1000, 'linear', resetBall);
		};

		const resetBall = () => {
			kickingPlayer.remove();
			runningPlayer = paper.image(footballerRun, -200, 300, 200, 180);
			runningPlayer.animate({ x: -200 }, 100, 'bounce');

			kickingPlayer = paper.image(footballerKick, 50, 300, 200, 180);
			kickingPlayer.hide();
			runningPlayer.show();
			football.animate({ x: -210, y: 400 }, 1000, runForward);
		};

		setTimeout(runForward, 1000);

		return () => {
			background.remove();
			runningPlayer.remove();
			kickingPlayer.remove();
			football.remove();
			paper.clear();

			try {
				paper.remove();
			} catch (e) {
				console.log(e);
			}
		};
	};

	useEffect(animation, [darkMode.value]);

	return <div id="animation_container"></div>;
};

export default FootballerAnimation;
