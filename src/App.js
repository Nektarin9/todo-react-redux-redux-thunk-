import style from './App.module.css';
import React from 'react';
import { useEffect, useRef } from 'react';
import { ModalTask, ListTasks } from './components/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
	actionFilter,
	actionNewTask,
	actionStateBtnSort,
	actionTasks,
	actionModal,
	actionCreateTaskAsync,
	actionTaskId,
} from './react-redux/action';
import {
	selectStateBtnSort,
	selectNewTask,
	selectTask,
	selectModal,
	selectStatusLoading,
} from './react-redux/selectors';
export function App() {
	const inputRef = useRef(null);
	const stateBtnSort = useSelector(selectStateBtnSort);
	const newTask = useSelector(selectNewTask);
	const tasks = useSelector(selectTask);
	const modal = useSelector(selectModal);
	const isLoading = useSelector(selectStatusLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionTasks());
	}, [isLoading]);

	function filterTasks(event) {
		const { target } = event;
		if (target.value) {
			dispatch(actionFilter(target.value));
		} else {
			dispatch(actionFilter(''));
		}
	}

	function btnAddTasks(inputRef, newTask) {
		if (newTask.trim()) {
			dispatch(actionCreateTaskAsync(newTask));
		} else {
			inputRef.current.focus();
		}
	}

	const handleTask = (taskId) => {
		dispatch(actionTaskId(taskId));
		dispatch(actionModal(true));
	};

	return (
		<>
			{modal && <ModalTask />}
			<h1>Список задач</h1>
			<input
				onChange={filterTasks}
				placeholder="Поиск"
				className={style.input_search}
				type="text"
			></input>
			<div className={style.bnt_container}>
				<button
					onClick={() => {
						dispatch(actionNewTask(''));
						btnAddTasks(inputRef, newTask);
					}}
					className={style.btn_task}
				>
					Добавить
				</button>
				<input
					value={newTask}
					onChange={({ target }) => dispatch(actionNewTask(target.value))}
					ref={inputRef}
					type="text"
					placeholder="Добавить задачу"
					className={style.input_add}
				></input>
			</div>
			<button
				onClick={() => dispatch(actionStateBtnSort(!stateBtnSort))}
				className={style.btn_task_sort}
			>
				Сортировать
			</button>
			<section
				className={style.container_tasks}
			>
				<ListTasks handleTask={handleTask} stateBtnSort={stateBtnSort} tasks={tasks} />
			</section>
		</>
	);
}
