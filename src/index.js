require('./assets/stylesheets/styles.scss');

//import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Link } from 'react-router-dom';

//Redux stuff
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

//import reducers
import usersReducer from 'reduxConfig/reducers/users';

const mainReducer = combineReducers({
	users: usersReducer,
	routing: routerReducer
});

const history = createHistory();

const store = createStore(
	mainReducer,
	undefined,
	compose(
		applyMiddleware(routerMiddleware(history)),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

//main app component
import Home from 'components/Home/Home.jsx';
import About from 'components/About/About.jsx';

const MyApp = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Router>
					<div>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</div>
				</Router>
			</ConnectedRouter>
		</Provider>
	);
}

//render our App componnet and mount it to our #root element
ReactDOM.render(<MyApp />, document.getElementById('root'));