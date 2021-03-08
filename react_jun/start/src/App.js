import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';
import Input from './routers/Input';
import Phonebook from './routers/Phonebook';
import Product from './routers/Product';

function App() {
	return (
		<Router>
			<header>
				<Link to="/home">Home으로</Link>
				<Link to="/list">List로</Link>
			</header>
			<Switch>

				<Route path="/home" render={(props) => (
					// <Home history={props.history} />
					<Home { ...props } />
				)} />
				
				<Route path="/list" component={List} />
				<Route path="/input" component={Input} />
				<Route path="/phonebook" component={Phonebook} />
				<Route path="/product/:type" component={Product} />

			</Switch>
		</Router>
	);
}

export default App;

// 숙제 1: phoneBook 만들기
// 숙제 2: 2중 Router 구성해보기 (Switch in Switch)