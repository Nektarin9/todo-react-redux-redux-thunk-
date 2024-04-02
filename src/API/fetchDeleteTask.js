export function fetchDeleteTask(id) {
	return fetch(`http://localhost:3005/tasks/${id}`, {
		method: 'DELETE',
	}).catch((error) => console.error(error));
}
