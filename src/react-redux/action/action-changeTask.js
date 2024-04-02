import { fetchBtnChangeTask } from '../../API';
import { CHANGE_TASK } from '../constans-typeAction';

export const actionChangeTaskAsync =
	(id, inputChangeValue, taskСompleted) => (dispatch) => {
		return fetchBtnChangeTask(id, inputChangeValue, taskСompleted).then((newTask) =>
			dispatch({ type: CHANGE_TASK, payload: newTask }),
		);
	};
