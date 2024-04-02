import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { globalReducer, modalWindowReduser, auxiLiaryStates } from './reducers';

const reducer = combineReducers({
	globalState: globalReducer,
	modalWindowState: modalWindowReduser,
	auxiLiaryStates: auxiLiaryStates,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
