export function fetchAddTask(newTask) {
	return fetch('http://localhost:3005/tasks', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: newTask,
			completed: false,
		}),
	}).catch((error) => console.error(error));
}
