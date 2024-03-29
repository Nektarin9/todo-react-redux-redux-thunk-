const initialModalWindowState = {
	inputChangeValue: '',
	inputError: false,
};
export function modalWindowReduser(state = initialModalWindowState, ation) {
	const { type, payload } = ation;
	switch (type) {
		case 'inputError': {
			return {
				...state,
				inputError: payload,
			};
		}

		case 'inputChangeValue': {
			return {
				...state,
				inputChangeValue: payload,
			};
		}
		default:
			return state;
	}
}
