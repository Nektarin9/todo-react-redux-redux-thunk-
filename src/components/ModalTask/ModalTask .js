import style from './ModalTask.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectInputChangeValue,
	selectInputError,
	selectTaskId,
} from '../../react-redux/selectors';
import {
	actionInputChangeValue,
	actionInputError,
	actionModal,
	actionLoading,
	actionChangeTaskAsync,
	actionDeleteTaskAsync,
} from '../../react-redux/action';

export function ModalTask() {
	const inputChangeValue = useSelector(selectInputChangeValue);
	const inputError = useSelector(selectInputError);
	const task = useSelector(selectTaskId);

	const dispatch = useDispatch();
	function changeTask() {
		if (inputChangeValue.trim() !== '') {
			dispatch(actionModal(false));
			dispatch(
				actionChangeTaskAsync(
					task.attributes[0].textContent,
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
				<div className={style.task}>{task.innerHTML}</div>
				<div className={style.bnt_container}>
					<input
						onChange={({ target }) => {
							dispatch(actionInputChangeValue(target.value));
							dispatch(actionInputError(false));
							dispatch(actionLoading());
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
							dispatch(actionLoading());
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
							dispatch(actionLoading());
							dispatch(
								actionChangeTaskAsync(
									task.attributes[0].textContent,
									task.innerHTML,
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
							dispatch(actionLoading());
							dispatch(
								actionChangeTaskAsync(
									task.attributes[0].textContent,
									task.innerHTML,
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
							dispatch(actionLoading());
							dispatch(
								actionDeleteTaskAsync(task.attributes[0].textContent),
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
