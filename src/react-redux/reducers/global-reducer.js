import { FILTER, NEW_TASK, STATE_BTN_SORT, MODAL, TASKS } from '../constans-typeAction';

export const initialGlobaltState = {
	filter: '',
	newTask: '',
	stateBtnSort: false,
	modal: false,
	tasks: [],
};

export function globalReducer(state = initialGlobaltState, ation) {
	const { type, payload } = ation;
	switch (type) {
		case FILTER: {
			return {
				...state,
				filter: payload,
			};
		}
		case NEW_TASK: {
			return {
				...state,
				newTask: payload,
			};
		}
		case STATE_BTN_SORT: {
			return {
				...state,
				stateBtnSort: payload,
			};
		}
		case MODAL: {
			return {
				...state,
				modal: payload,
			};
		}
		case TASKS: {
			return {
				...state,
				tasks: payload,
			};
		}
		default:
			return state;
	}
}
