import { INPUT_ERROR, INPUT_CHANGE_VALUE } from '../constans-typeAction';

const initialModalWindowState = {
	inputChangeValue: '',
	inputError: false,

};
export function modalWindowReduser(state = initialModalWindowState, action) {
	const { type, payload } = action;
	switch (type) {
		case INPUT_ERROR: {
			return {
				...state,
				inputError: payload,
			};
		}

		case INPUT_CHANGE_VALUE: {
			return {
				...state,
				inputChangeValue: payload,
			};
		}
		default:
			return state;
	}
}
