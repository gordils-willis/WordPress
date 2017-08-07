import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';


import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import App from 'containers/App';

const initialState = {};
let store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
