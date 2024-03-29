import style from './App.module.css';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { UseAddTasks } from './hooks/UseBtnAddTask.js';
import { ModalWindow, ShowTasks } from './components/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
	actionFilter,
	actionNewTask,
	actionStateBtnSort,
} from './react-redux/action/index';
import { selectStateBtnSort } from './react-redux/selectors/index.js';
let obj_target;

export function App() {
	const [refreshTasks, setRefreshTasks] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [modal, setModal] = useState(false);

	const inputRef = useRef(null);

	const stateBtnSort = useSelector(selectStateBtnSort);

	const dispatch = useDispatch();

	useEffect(() => {
		fetch('http://localhost:3005/tasks')
			.then((loadedData) => {
				return loadedData.json();
			})
			.then((response) => {
				setTasks(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [refreshTasks]);

	function filterTasks(event) {
		const { target } = event;
		if (target.value) {
			dispatch(actionFilter(target.value));
		} else {
			dispatch(actionFilter(''));
		}
	}

	const { btnAddTasks, errorNewTask } = UseAddTasks(
		refreshTasks,
		setRefreshTasks,
		inputRef,
	);

	function selectTask(event) {
		const { target } = event;
		if (target.closest('div') && target.tagName !== 'SECTION') {
			setModal(true);
			obj_target = target;
		} else {
			setModal(false);
		}
	}

	return (
		<>
			{modal ? (
				<ModalWindow
					setModal={setModal}
					refreshTasks={refreshTasks}
					setRefreshTasks={setRefreshTasks}
					obj_target={obj_target}
				/>
			) : (
				<></>
			)}
			<h1>Список задач</h1>
			<input
				onChange={filterTasks}
				placeholder="Поиск"
				className={style.input_search}
				type="text"
			></input>
			<div className={style.bnt_container}>
				<button onClick={btnAddTasks} className={style.btn_task}>
					Добавить
				</button>
				<input
					onChange={({ target }) => dispatch(actionNewTask(target.value))}
					ref={inputRef}
					type="text"
					placeholder="Добавить задачу"
					className={
						errorNewTask
							? `${style.input_add} ${style.input_add_error}`
							: style.input_add
					}
				></input>
			</div>
			<button
				onClick={() => dispatch(actionStateBtnSort(!stateBtnSort))}
				className={style.btn_task_sort}
			>
				Сортировать
			</button>
			<section onClick={selectTask} className={style.container_tasks}>
				<ShowTasks stateBtnSort={stateBtnSort} tasks={tasks} />
			</section>
		</>
	);
}
