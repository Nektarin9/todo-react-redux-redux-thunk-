import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { globalReducer, modalWindowReduser } from './reducers';

const reducer = combineReducers({
	globalState: globalReducer,
	modalWindowState: modalWindowReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
