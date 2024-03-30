import { FILTER } from "../constans-typeAction"

export function actionFilter(str) {
	return {
		type: FILTER,
		payload: str
	}
}
