import React, { useRef, useEffect } from 'react';

import Raphael from 'raphael';

import footballImage from '../../assets/animation/Ball.png';
import footballerRun from '../../assets/animation/Footballer.gif';
import footballerKick from '../../assets/animation/Kicking.gif';
import goalImage from '../../assets/animation/Goal.png';

import useDarkMode from 'use-dark-mode';

import styles from './FootballerAnimation.module.css';

const FootballerAnimation = ({ audioIsPlaying }) => {
	const darkMode = useDarkMode();
	const ref = useRef();

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
		const text = paper.text(350, 100, 'GOAL');
		text.attr({
			'font-size': 100,
			'text-align': 'center',
			'font-family': 'Roboto',
		});
		text.hide();
		const clickToRetry = paper.text(350, 100, 'Click to score again!');
		clickToRetry.hide();

		goal.toBack();
		football.toBack();

		grass.toBack();
		background.toBack();

		let runningPlayer = paper.image(footballerRun, -200, 300, 200, 180);
		let kickingPlayer = paper.image(footballerKick, 50, 300, 200, 180);
		kickingPlayer.hide();

		const runForward = () => {
			football.attr({ width: 37, height: 37 });
			skyBulb.attr({ r: 40, cx: 730, cy: 70 });
			clickToRetry.hide();
			football.attr({ opacity: 1, x: 210, y: 400 });
			football.hide();
			goal.attr({ opacity: 1, x: 450, y: 275 });
			goal.show();

			text.hide();

			runningPlayer.animate({ x: 100 }, 1000, 'ease-in', kick);
		};

		const kick = () => {
			runningPlayer.hide();
			kickingPlayer.show();
			football.attr({ width: 37, height: 37 });
			setTimeout(() => {
				football.show();
			}, 280);

			football.animate({ x: 700, y: 350 }, 1200, 'linear', resetBall);
		};

		const resetBall = () => {
			try {
				kickingPlayer.remove();
				runningPlayer = paper.image(footballerRun, -200, 300, 200, 180);

				kickingPlayer = paper.image(footballerKick, 50, 300, 200, 180);
				kickingPlayer.hide();
				runningPlayer.show();
			} catch (e) {
				console.log(e);
			}

			football.animate(
				{ width: 100, height: 100, x: 250, y: 350 },
				1000,
				'elastic',
				goalScored
			);
		};

		const goalScored = () => {
			ref.current.addEventListener('click', () => {
				runForward();
			});

			skyBulb.animate(
				{
					r: 600,
					cx: 400,
					cy: 200,
				},
				1000,
				'linear'
			);
			text.show();
			text.animate(
				{
					x: 300,
					y: 200,
				},
				1000,
				() => {
					clickToRetry.show();
					clickToRetry.attr({
						x: 280,
						y: 300,
						'font-size': 20,
					});
				}
			);

			football.toFront();
			football.animate(
				{ transform: 'r' + 360, width: 150, height: 150 },
				3000,
				'elastic',
				() => {
					text.animate(
						{
							fill: 'blue',
							'stroke-width': 2,
							stroke: 'black',
						},
						2000
					);
				}
			);
		};

		if (audioIsPlaying) {
			runForward();
		}

		return () => {
			background.remove();
			runningPlayer.remove();
			kickingPlayer.remove();
			football.remove();
			text.remove();
			clickToRetry.remove();
			grass.remove();
			paper.clear();

			try {
				paper.remove();
			} catch (e) {
				console.log(e);
			}
		};
	};

	useEffect(animation, [darkMode.value, audioIsPlaying]);

	return (
		<div className={styles.Animation} id="animation_container" ref={ref}></div>
	);
};

export default FootballerAnimation;
