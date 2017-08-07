import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers/root';

export default function configureStore (initialState) {


const createStoreWithMiddleware = compose(
		applyMiddleware(thunk),
	)(createStore);
	const store = createStoreWithMiddleware(rootReducer);
	return store;
}
