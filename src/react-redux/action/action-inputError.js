import { INPUT_ERROR } from "../constans-typeAction"
export function actionInputError(state) {
	return {
		type: INPUT_ERROR,
		payload: state
	}
}
