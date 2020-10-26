import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Video from './pages/Video';
import Hobbies from './pages/Hobbies';
import Animation from './pages/Animation';
import Coursework from './pages/Coursework';

const App = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/video">
						<Video />
					</Route>
					<Route path="/hobbies">
						<Hobbies />
					</Route>
					<Route path="/animation">
						<Animation />
					</Route>
					<Route path="/coursework">
						<Coursework />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default App;
