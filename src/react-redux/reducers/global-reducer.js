export const initialGlobaltState = {
	filter: '',
	newTask: '',
	stateBtnSort: false,
	modal: false,
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

		default:
			return state;
	}
}
