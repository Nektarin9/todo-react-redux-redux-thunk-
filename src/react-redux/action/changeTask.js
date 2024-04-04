import { fetchBtnChangeTask } from '../../API';
import { SET_LOADING_START, SET_LOADING_END, CHANGE_TASK } from '../constans-typeAction';

export const actionChangeTaskAsync =
	(id, inputChangeValue, taskСompleted) => (dispatch) => {
		dispatch({ type: SET_LOADING_START });
		return fetchBtnChangeTask(id, inputChangeValue, taskСompleted)
			.then((newTask) => dispatch({ type: CHANGE_TASK, payload: newTask }))
			.finally(() => dispatch({ type: SET_LOADING_END }));
	};
