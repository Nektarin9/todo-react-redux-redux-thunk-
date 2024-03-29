export function UseBtnDeleteTask(id, setModal) {
	fetch(`http://localhost:3005/tasks/${id}`, {
		method: 'DELETE',
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			setModal(false);
		})
		.catch((error) => {
			console.error(error);
		});
}
