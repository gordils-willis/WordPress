import { combineReducers } from 'redux';

import pages from './pages';
import posts from './posts';

const rootReducer = combineReducers({
	pages,
	posts
});

export default rootReducer;