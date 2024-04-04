import { fetchDeleteTask } from '../../API';
import { SET_LOADING_START, SET_LOADING_END, DELETE_TASK } from '../constans-typeAction';

export const actionDeleteTaskAsync = (id) => (dispatch) => {
	dispatch({ type: SET_LOADING_START });

	return fetchDeleteTask(id)
		.then((remoteTask) => dispatch({ type: DELETE_TASK, payload: remoteTask }))
		.finally(() => dispatch({ type: SET_LOADING_END }));
};
