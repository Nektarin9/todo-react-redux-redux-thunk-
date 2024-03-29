import { legacy_createStore, combineReducers } from "redux";
import { globalReducer, modalWindowReduser } from "./reducers";

const reducer = combineReducers({
	globalState: globalReducer,
	modalWindowState: modalWindowReduser,
});
export const store = legacy_createStore(reducer)
