export function fetchTasks() {
	return fetch('http://localhost:3005/tasks')
		.then((loadedData) => {
			return loadedData.json();
		})
		.catch((error) => {
			console.error(error);
		});
}
