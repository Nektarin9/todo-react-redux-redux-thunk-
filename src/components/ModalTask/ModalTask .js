import style from './ModalTask.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectInputChangeValue,
	selectInputError,
	selectTaskId,
	getTaskByid
} from '../../react-redux/selectors';
import {
	actionInputChangeValue,
	actionInputError,
	actionModal,
	actionChangeTaskAsync,
	actionDeleteTaskAsync,
} from '../../react-redux/action';

export function ModalTask() {
	const inputChangeValue = useSelector(selectInputChangeValue);
	const inputError = useSelector(selectInputError);

	const taskId = useSelector(selectTaskId);
	const task = useSelector(getTaskByid(taskId));

	const dispatch = useDispatch();
	function changeTask() {
		if (inputChangeValue.trim() !== '') {
			dispatch(actionModal(false));
			dispatch(
				actionChangeTaskAsync(
					taskId,
					inputChangeValue,
					false,
				),
			);
			dispatch(actionInputChangeValue(''));
			dispatch(actionInputError(false));
		} else {
			dispatch(actionInputError(true));
		}
	}

	return (
		<section className={style.background_modal}>
			<span
				onClick={() => {
					dispatch(actionInputError(false));
					dispatch(actionModal(false));
				}}
				className={style.close}
			>
				Закрыть
			</span>
			<div className={style.modal_container}>
				<div className={style.task}>{task.title}</div>
				<div className={style.bnt_container}>
					<input
						onChange={({ target }) => {
							dispatch(actionInputChangeValue(target.value));
							dispatch(actionInputError(false));
						}}
						placeholder="Изменить задачу"
						type="text"
						className={
							inputError
								? `${style.input_change} ${style.input_add_error}`
								: style.input_change
						}
					></input>
					<button
						onClick={() => {
							changeTask();
						}}
						className={style.btn_task}
					>
						Изменить
					</button>
					<button
						className={style.btn_task_completed}
						onClick={() => {
							dispatch(actionModal(false));
							dispatch(actionInputError(false));
							dispatch(
								actionChangeTaskAsync(
									taskId,
									task.title,
									true,
								),
							);
						}}
					>
						Выполнено
					</button>
					<button
						className={style.btn_task_completed_false}
						onClick={() => {
							dispatch(actionModal(false));
							dispatch(actionInputError(false));
							dispatch(
								actionChangeTaskAsync(
									taskId,
									task.title,
									false,
								),
							);
						}}
					>
						Не выполнено
					</button>

					<button
						onClick={() => {
							dispatch(actionModal(false));
							dispatch(actionInputError(false));
							dispatch(
								actionDeleteTaskAsync(taskId),
							);
						}}
						className={style.btn_task_del}
					>
						Удалить
					</button>
				</div>
			</div>
		</section>
	);
}
