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
		case 'filter': {
			return {
				...state,
				filter: payload,
			};
		}
		case 'newTask': {
			return {
				...state,
				newTask: payload,
			};
		}
		case 'stateBtnSort': {
			return {
				...state,
				stateBtnSort: payload,
			};
		}
		case 'modal': {
			return {
				...state,
				modal: payload,
			};
		}
		case 'tasks': {
			return {
				...state,
				tasks: payload,
			};
		}
		default:
			return state;
	}
}
