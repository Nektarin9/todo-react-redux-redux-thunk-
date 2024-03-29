import { useSelector } from 'react-redux';
import { selectNewTask } from '../react-redux/selectors';
import { fetchBtnAddTask } from './API/fetchBtnAddTask';

export function UseAddTasks(inputRef) {
	let newTask = useSelector(selectNewTask);

	function btnAddTasks() {
		if (newTask.trim()) {
			fetchBtnAddTask(newTask);
		} else {
			inputRef.current.focus();
		}
	}
	return { btnAddTasks };
}
