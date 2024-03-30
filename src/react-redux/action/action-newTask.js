import { NEW_TASK } from "../constans-typeAction"
export function actionNewTask(str) {
	return {
		type: NEW_TASK,
		payload: str
	}
}
