import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';

const App = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default App;
