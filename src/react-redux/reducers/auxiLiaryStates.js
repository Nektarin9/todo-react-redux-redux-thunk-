import {
	ADD_TASK,
	CURRENT_TASK_ID,
	CHANGE_TASK,
	DELETE_TASK,
} from '../constans-typeAction';

export const initiaLauxiliaryStates = {
	addTask: '',
	deleteTask: '',
	taskId: null,
	changeTask: null,
};
export function auxiLiaryStates(state = initiaLauxiliaryStates, ation) {
	const { type, payload } = ation;
	switch (type) {
		case ADD_TASK: {
			return {
				...state,
				addTask: payload,
			};
		}
		case DELETE_TASK: {
			return {
				...state,
				deleteTask: payload,
			};
		}
		case CURRENT_TASK_ID: {
			return {
				...state,
				taskId: payload,
			};
		}
		case CHANGE_TASK: {
			return {
				...state,
				changeTask: payload,
			};
		}
		default:
			return state;
	}
}
