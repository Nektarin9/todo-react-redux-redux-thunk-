import { fetchTasks } from '../../API/fetchTasks';

export const actionTasks = () => (dispatch) =>
	fetchTasks().then((tasksData) => {
		dispatch({
			type: 'tasks',
			payload: tasksData,
		});
	});
