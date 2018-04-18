import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store;

export default {
	configureStore: () => {
		const reducers = combineReducers({
			post: postReducer
		});

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		);

		return store;
	},

	currentStore: () => {
		return store;
	}
};
