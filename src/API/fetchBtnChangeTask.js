export function fetchBtnChangeTask(id, inputChangeValue, taskСompleted) {
	return fetch(`http://localhost:3005/tasks/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: inputChangeValue,
			completed: taskСompleted,
		}),
	}).catch((error) => console.error(error));
}
