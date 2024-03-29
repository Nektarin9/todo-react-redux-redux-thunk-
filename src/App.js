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
	actionTasks,
} from './react-redux/action/index';
import {
	selectStateBtnSort,
	selectNewTask,
	selectTask,
} from './react-redux/selectors/index.js';

let obj_target;

export function App() {
	const [modal, setModal] = useState(false);

	const inputRef = useRef(null);

	const stateBtnSort = useSelector(selectStateBtnSort);
	const newTask = useSelector(selectNewTask);
	const tasks = useSelector(selectTask);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionTasks());
	}, [tasks]);

	function filterTasks(event) {
		const { target } = event;
		if (target.value) {
			dispatch(actionFilter(target.value));
		} else {
			dispatch(actionFilter(''));
		}
	}

	const { btnAddTasks } = UseAddTasks(inputRef);

	function selectTargetTask(event) {
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
				<button
					onClick={() => {
						dispatch(actionNewTask(''));
						btnAddTasks();
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
