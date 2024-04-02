import {
	FILTER,
	NEW_TASK,
	STATE_BTN_SORT,
	MODAL,
	TASKS,
	IS_LOADING,

} from '../constans-typeAction';

export const initialGlobaltState = {
	filter: '',
	newTask: '',
	stateBtnSort: false,
	modal: false,
	tasks: [],
	isLoading: true,

};

export function globalReducer(state = initialGlobaltState, ation) {
	const { type, payload } = ation;
	switch (type) {
		case FILTER: {
			return {
				...state,
				filter: payload,
				isLoading: !state.isLoading,
			};
		}
		case NEW_TASK: {
			return {
				...state,
				newTask: payload,
				isLoading: !state.isLoading,
			};
		}
		case STATE_BTN_SORT: {
			return {
				...state,
				stateBtnSort: payload,
				isLoading: !state.isLoading,
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
		case IS_LOADING: {
			return {
				...state,
				isLoading: !state.isLoading,
			};
		}


		default:
			return state;
	}
}
