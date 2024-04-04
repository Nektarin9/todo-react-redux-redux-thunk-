import {
	FILTER,
	NEW_TASK,
	STATE_BTN_SORT,
	MODAL,
	TASKS,
	SET_LOADING_END,
	SET_LOADING_START,
	ADD_TASK,
	DELETE_TASK,
	CHANGE_TASK,
	CURRENT_TASK_ID,
} from '../constans-typeAction';

export const initialGlobaltState = {
	filter: '',
	newTask: '',
	stateBtnSort: false,
	modal: false,
	tasks: [],
	isLoading: true,
	taskId: null,
};

export function globalReducer(state = initialGlobaltState, action) {
	const { type, payload } = action;

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

		case ADD_TASK: {
			return {
				...state,
				tasks: [...state.tasks, payload],
			};
		}
		case DELETE_TASK: {
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== payload),
			};
		}

		case CHANGE_TASK: {
			const copyTasks = [...state.tasks];
			const idTask = copyTasks.findIndex((task) => task.id === state.taskId);
			return {
				...state,
				tasks: state.tasks.map((task, index) => {
					if (index === idTask) {
						task.title = payload.title;
						task.completed = payload.completed;
					}
					return task;
				}),
			};
		}
		case SET_LOADING_START: {
			return {
				...state,
				isLoading: true,
			};
		}
		case SET_LOADING_END: {
			return {
				...state,
				isLoading: false,
			};
		}
		case CURRENT_TASK_ID: {
			return {
				...state,
				taskId: payload,
			};
		}
		default:
			return state;
	}
}
