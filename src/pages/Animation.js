import React, { Component } from 'react';
import Raphael from 'raphael';

class Animation extends Component {
	componentDidMount() {
		let paper = Raphael('animate_container', 800, 600);

		let circle = paper.circle(400, 300, 50).attr({ fill: 'red' });
		let hoverInCircle = () => {
			circle.animate({ fill: 'green', r: 30, stroke: 'blue' }, 1000, 'elastic');
		};

		let hoverOutCircle = () => {
			circle.animate({ fill: 'blue', r: 60, stroke: 'grey' }, 1000, 'elastic');
		};
		circle.animate(
			{
				fill: 'blue',
				r: 60,
				stroke: 'grey',
				'stroke-width': 40,
				'stroke-opacity': 0.7,
			},
			1000,
			'elastic'
		);

		circle.hover(hoverInCircle, hoverOutCircle);
	}

	render() {
		return (
			<div>
				<div id="animate_container"></div>
			</div>
		);
	}
}

export default Animation;
