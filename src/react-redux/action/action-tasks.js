import { fetchTasks } from '../../API/fetchTasks';
import { TASKS } from '../constans-typeAction';
export const actionTasks = () => (dispatch) =>
	fetchTasks().then((tasksData) => {
		dispatch({
			type: TASKS,
			payload: tasksData,
		});
	});
