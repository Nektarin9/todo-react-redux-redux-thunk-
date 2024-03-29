import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { globalReducer, modalWindowReduser } from "./reducers";

const reducer = combineReducers({
	globalState: globalReducer,
	modalWindowState: modalWindowReduser,
});
export const store = legacy_createStore(reducer, applyMiddleware(thunk))
