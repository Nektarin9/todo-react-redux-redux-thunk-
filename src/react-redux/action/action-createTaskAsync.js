import { fetchAddTask } from '../../API';
import { ADD_TASK } from '../constans-typeAction';

export const actionCreateTaskAsync = (newTaskData) => (dispatch) => {
	return fetchAddTask(newTaskData).then((newTask) =>
		dispatch({ type: ADD_TASK, payload: newTask }),
	);
};
