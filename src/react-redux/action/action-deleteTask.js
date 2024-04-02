import { fetchDeleteTask } from '../../API';
import { DELETE_TASK } from '../constans-typeAction';

export const actionDeleteTaskAsync = (id) => (dispatch) => {
	return fetchDeleteTask(id).then((remoteTask) =>
		dispatch({ type: DELETE_TASK, payload: remoteTask }),
	);
};
