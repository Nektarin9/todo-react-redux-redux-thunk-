

export function UseBtnChangeTask(
	id,
	setModal,
	inputChangeValue,
	taskСompleted,
) {
	fetch(`http://localhost:3005/tasks/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: inputChangeValue,
			completed: taskСompleted,
		}),
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			setModal(false);
		})
		.catch((error) => {
			console.error(error);
		});


}
