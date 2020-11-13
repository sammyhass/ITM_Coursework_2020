import React, { useRef, useEffect } from 'react';

import Raphael from 'raphael';

import styles from './TetrisAnimation.module.css';

const TetrisAnimation = ({ audioIsPlaying }) => {
	const ref = useRef();

	const animation = () => {
		const WIDTH = 300;
		const HEIGHT = 600;
		const UNIT = 30;
		let paper = Raphael('animation_container', WIDTH, HEIGHT);

		// Background
		let backgroundFills = paper.rect(0, 0, WIDTH, HEIGHT);
		backgroundFills.attr('fill', 'skyblue');

		// Grid on Background
		let gridSquares = [];
		for (let i = 0; i < WIDTH; i += UNIT) {
			for (let j = 0; j < HEIGHT; j += UNIT) {
				gridSquares.push(paper.rect(i, j, UNIT, UNIT));
			}
		}

		// End Text
		let endText = {
			B: [
				paper.rect(UNIT, UNIT, UNIT, 19 * UNIT).attr({ fill: 'blue' }),
				paper
					.rect(UNIT * 2, UNIT, UNIT * 5, UNIT * 9)
					.attr({ stroke: 'blue', 'stroke-width': UNIT }),
				paper
					.rect(UNIT * 2.3, UNIT * 11, UNIT * 5, UNIT * 9)
					.attr({ stroke: 'blue', 'stroke-width': UNIT }),
			],
			R: [
				paper.rect(UNIT, UNIT, UNIT, 19 * UNIT).attr({ fill: 'blue' }),
				paper
					.rect(UNIT * 2, UNIT, UNIT * 5, UNIT * 9)
					.attr({ stroke: 'blue', 'stroke-width': UNIT }),
				paper
					.path(
						`M${UNIT * 2},${UNIT * 10} L${WIDTH - 2 * UNIT},${HEIGHT + UNIT}`
					)
					.attr({ stroke: 'blue', 'stroke-width': UNIT }),
			],
			I: [paper.rect(UNIT * 4, UNIT, UNIT, UNIT * 20).attr({ fill: 'blue' })],
			C: [
				paper.rect(UNIT, UNIT, UNIT, UNIT * 19).attr({ fill: 'blue' }),
				paper.rect(UNIT, UNIT, UNIT * 7, UNIT).attr({ fill: 'blue' }),
				paper.rect(UNIT, UNIT * 19, UNIT * 7, UNIT).attr({ fill: 'blue' }),
			],
			K: [
				paper.rect(UNIT, UNIT, UNIT, UNIT * 19).attr({ fill: 'blue' }),
				paper
					.path(
						`M${UNIT * 2},${UNIT * 10} L${WIDTH - 2 * UNIT},${HEIGHT + UNIT}`
					)
					.attr({ stroke: 'blue', 'stroke-width': UNIT }),
				paper
					.path(`M${UNIT * 2},${UNIT * 10} L${WIDTH - 2 * UNIT}, ${UNIT}`)
					.attr({ stroke: 'blue', 'stroke-width': UNIT }),
			],
		};
		endText.B.forEach(el => el.hide());
		endText.R.forEach(el => el.hide());
		endText.I.forEach(el => el.hide());
		endText.C.forEach(el => el.hide());
		endText.K.forEach(el => el.hide());

		// Brick Definitions
		let bottomLineBrick = paper.rect(0, HEIGHT - UNIT, UNIT * 10, UNIT);
		bottomLineBrick.attr({ fill: 'red', opacity: 0 });

		let brickOne = paper.rect(UNIT * 2, -UNIT * 4, UNIT, UNIT * 4); // Long Brick
		brickOne.attr('fill', 'yellow').attr('stroke', 'none');

		let brickTwo = paper.rect(UNIT * 3, -UNIT * 2, UNIT * 2, UNIT * 2);
		brickTwo.attr('fill', 'green').attr('stroke', 'none');

		let brickThree = [
			paper
				.rect(UNIT * 5, -UNIT * 3, UNIT, UNIT * 3)
				.attr('fill', 'blue')
				.attr('stroke', 'none'),
			paper
				.rect(UNIT * 4, -UNIT * 3, UNIT, UNIT)
				.attr('fill', 'blue')
				.attr('stroke', 'none'),
		];

		let brickFour = paper.rect(UNIT * 6, -UNIT, UNIT * 4, UNIT);
		brickFour.attr('fill', 'orange').attr('stroke', 'none');

		let brickFive = paper.rect(0, -UNIT * 2, UNIT * 2, UNIT * 2);
		brickFive.attr('fill', 'pink').attr('stroke', 'none');

		// SCENE 1: No Bricks on Screen
		const noBricks = () => {
			setTimeout(firstBrickFalls, 1000);
		};

		// SCENE 2: Long Brick Falling and Rotating
		const firstBrickFalls = () => {
			brickOne.animate({ y: HEIGHT - 4 * UNIT }, 2000, 'bounce', () => {
				brickOne.animate({ fill: 'white' }, 50, 'ease-in', secondBrickFalls);
			});
		};

		// SCENE 3: Square Brick falls to left of Long Brick
		const secondBrickFalls = () => {
			brickTwo.animate({ y: HEIGHT - 2 * UNIT }, 2000, 'bounce', () => {
				brickTwo.animate({ fill: 'white' }, 50, brickThreeFalls);
			});
		};

		// SCENE 4: brickThree falls
		const brickThreeFalls = () => {
			for (let rect of brickThree) {
				rect.animate({ y: HEIGHT - 3 * UNIT }, 2000, 'bounce', () => {
					rect.animate({ fill: 'white' }, 50, brickFourFalls);
				});
			}
		};

		// SCENE 5: Long brick falls length ways
		const brickFourFalls = () => {
			brickFour.animate({ y: HEIGHT - UNIT }, 2000, 'bounce', () => {
				brickFour.animate({ fill: 'white' }, 50, brickFiveFalls);
			});
		};

		// SCENE 6: Final brick falls to complete the line
		const brickFiveFalls = () => {
			brickFive.animate({ y: HEIGHT - UNIT * 2 }, 2000, 'bounce', () => {
				brickFive.animate({ fill: 'white' }, 50, lineSelected);
			});
		};

		// SCENE 7 : Line Selected for Deletion
		const lineSelected = () => {
			bottomLineBrick.toFront();
			bottomLineBrick.animate({ opacity: 1 }, 200, lineVanishes);
		};

		// SCENE 8 : Line Vanishes
		const lineVanishes = () => {
			brickOne.attr('height', UNIT * 3);
			brickTwo.attr('height', UNIT);
			brickThree[0].attr('height', UNIT * 2);
			brickFive.attr('height', UNIT);
			brickFour.attr('height', 0);
			bottomLineBrick.animate(
				{
					opacity: 0,
				},
				100,
				() => setTimeout(bricksFallDown, 50)
			);
		};

		// SCENE 9 : Remaining Bricks Fall Down
		const bricksFallDown = () => {
			brickOne.animate({ y: HEIGHT - 3 * UNIT }, 1000);
			brickTwo.animate({ y: HEIGHT - UNIT }, 1000);
			for (let rect of brickThree) {
				rect.animate({ y: HEIGHT - 2 * UNIT }, 1000);
			}
			brickFive.animate({ y: HEIGHT - UNIT }, 1000, bricksVanish);
		};

		// SCENE 10: Bricks vanish
		const bricksVanish = () => {
			brickOne.animate({ opacity: 0 }, 300);
			brickTwo.animate({ opacity: 0 }, 300);
			brickThree.forEach(rect => rect.animate({ opacity: 0 }, 300));
			brickFour.animate({ opacity: 0 }, 300);
			brickFive.animate({ opacity: 0 }, 300);
			letterBAppears();
		};

		// SCENE 11: Letters Appearing (B)
		const letterBAppears = async () => {
			endText.B.forEach(el => el.show());
			setTimeout(() => {
				endText.B.forEach(el => el.hide());
				letterRAppears();
			}, 200);
		};

		// SCENE 12: Letter R Appears
		const letterRAppears = async () => {
			endText.R.forEach(el => el.show());
			setTimeout(() => {
				endText.R.forEach(el => el.hide());
				letterIAppears();
			}, 200);
		};

		const letterIAppears = () => {
			endText.I.forEach(el => el.show());
			setTimeout(() => {
				endText.I.forEach(el => el.hide());
				letterCAppears();
			}, 200);
		};

		const letterCAppears = () => {
			endText.C.forEach(el => el.show());
			setTimeout(() => {
				endText.C.forEach(el => el.hide());
				letterKAppears();
			}, 200);
		};

		const letterKAppears = () => {
			endText.K.forEach(el => el.show());
			setTimeout(() => {
				endText.K.forEach(el => el.hide());
				letterBAppears();
			}, 200);
		};

		if (audioIsPlaying) {
			noBricks();
		}

		return () => {
			endText.B.forEach(el => el.remove());
			endText.R.forEach(el => el.remove());
			endText.I.forEach(el => el.remove());
			endText.C.forEach(el => el.remove());
			endText.K.forEach(el => el.remove());

			brickOne.remove();
			brickTwo.remove();
			brickThree.forEach(el => el.remove());
			brickFour.remove();
			brickFive.remove();

			backgroundFills.remove();
			gridSquares.forEach(el => el.remove());

			try {
				paper.remove();
			} catch (e) {
				console.log(e);
			}
		};
	};

	useEffect(animation, [audioIsPlaying]);

	return (
		<div className={styles.Animation} id="animation_container" ref={ref}></div>
	);
};

export default TetrisAnimation;
