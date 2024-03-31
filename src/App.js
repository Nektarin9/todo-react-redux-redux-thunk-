import style from './App.module.css';
import React from 'react';
import { useEffect, useRef } from 'react';
import { fetchAddTask } from './API/fetchAddTask.js';
import { ModalWindow, ShowTasks } from './components/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
	actionFilter,
	actionNewTask,
	actionStateBtnSort,
	actionTasks,
	actionModal,
} from './react-redux/action/index';
import {
	selectStateBtnSort,
	selectNewTask,
	selectTask,
	selectModal,
} from './react-redux/selectors/index.js';

let obj_target;

export function App() {
	const inputRef = useRef(null);
	const stateBtnSort = useSelector(selectStateBtnSort);
	const newTask = useSelector(selectNewTask);
	const tasks = useSelector(selectTask);
	const modal = useSelector(selectModal);
	const isLoading = useSelector((state)=> state.globalState.isLoading);
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

	function selectTargetTask(event) {
		const { target } = event;
		if (target.closest('div') && target.tagName !== 'SECTION') {
			dispatch(actionModal(true));
			obj_target = target;
		} else {
			dispatch(actionModal(false));
		}
	}
	function btnAddTasks(inputRef, newTask) {
		if (newTask.trim()) {
			fetchAddTask(newTask);
		} else {
			inputRef.current.focus();
		}
	}
	return (
		<>
			{modal ? <ModalWindow obj_target={obj_target} /> : <></>}
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
			<section onClick={selectTargetTask} className={style.container_tasks}>
				<ShowTasks stateBtnSort={stateBtnSort} tasks={tasks} />
			</section>
		</>
	);
}
