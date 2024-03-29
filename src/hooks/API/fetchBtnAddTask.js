export function fetchBtnAddTask(newTask) {
	fetch('http://localhost:3005/tasks', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: newTask,
			id: Math.random().toString(36).substr(2, 9),
			completed: false,
		}),
	}).catch((error) => {
		console.error(error);
	});
}
