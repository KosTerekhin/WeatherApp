import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MyLocation from './layout/mylocation/my-location.container';
import City from './layout/city/city.container';
import Main from './layout/mainpage/mainpage.container';
import NotFound from './layout/notFound/not-found.component';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Main />
				<Switch>
					<Route exact path="/" component={MyLocation} />
					<Route exact path="/city/:lat/:lon" component={City} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
