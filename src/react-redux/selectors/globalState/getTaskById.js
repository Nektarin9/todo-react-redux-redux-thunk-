export const getTaskByid = (id) => (state) =>
	state.globalState.tasks.find((task) => task.id === id);
