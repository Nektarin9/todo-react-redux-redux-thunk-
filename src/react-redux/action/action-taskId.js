import { CURRENT_TASK_ID } from '../constans-typeAction';

export function actionTaskId(id) {
	return {
		type: CURRENT_TASK_ID,
		payload: id,
	};
}
