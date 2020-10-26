window.onload = () => {
	let paper = new Raphael(0, 0, 800, 600);
	let background = paper.rect(0, 0, 800, 600);
	background.attr({ fill: 'blue' });

	let ball = paper.circle(50, 50, 30);
	ball.attr({ fill: '45-green-yellow' });

	const bounceDrop1 = () => {
		ball.animate({ cy: 570, cx: 400 }, 500, 'ease-in', bounceUp1);
	};
	const bounceUp1 = () => {
		ball.animate({ cy: 50, cx: 750 }, 500, 'ease-out', bounceDrop2);
	};
	const bounceDrop2 = () => {
		ball.animate({ cy: 570, cx: 400 }, 500, 'ease-in', bounceUp2);
	};
	const bounceUp2 = () => {
		ball.animate({ cy: 50, cx: 50 }, 500, 'ease-out', bounceDrop1);
	};
	bounceDrop1();
};
const Bounce = () => {};
