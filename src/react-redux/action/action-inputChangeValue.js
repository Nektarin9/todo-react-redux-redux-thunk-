import { INPUT_CHANGE_VALUE } from "../constans-typeAction"
export function actionInputChangeValue(state) {
	return {
		type: INPUT_CHANGE_VALUE,
		payload: state
	}
}
