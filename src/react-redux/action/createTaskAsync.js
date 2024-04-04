import { fetchAddTask } from '../../API';
import { ADD_TASK } from '../constans-typeAction';
import { SET_LOADING_START, SET_LOADING_END } from '../constans-typeAction';

export const actionCreateTaskAsync = (newTaskData) => (dispatch) => {
	dispatch({ type: SET_LOADING_START });
	return fetchAddTask(newTaskData)
		.then((newTask) => dispatch({ type: ADD_TASK, payload: newTask }))
		.finally(() => dispatch({ type: SET_LOADING_END }));
};
