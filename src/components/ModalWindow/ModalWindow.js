import style from './ModalWindow.module.css';
import { fetchBtnChangeTask, fetchDeleteTask } from '../../API';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputChangeValue, selectInputError } from '../../react-redux/selectors';
import {
	actionInputChangeValue,
	actionInputError,
	actionModal,
} from '../../react-redux/action';

export function ModalWindow({ obj_target }) {
	const inputChangeValue = useSelector(selectInputChangeValue);
	const inputError = useSelector(selectInputError);
	const dispatch = useDispatch();
	function changeTask() {
		if (inputChangeValue.trim() !== '') {
			dispatch(actionModal(false));
			fetchBtnChangeTask(
				obj_target.attributes[0].textContent,
				inputChangeValue,
				false,
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
				<div className={style.task}>{obj_target.innerHTML}</div>
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
					<button onClick={changeTask} className={style.btn_task}>
						Изменить
					</button>
					<button
						className={style.btn_task_completed}
						onClick={() => {
							dispatch(actionModal(false));
							dispatch(actionInputError(false));
							fetchBtnChangeTask(
								obj_target.attributes[0].textContent,
								obj_target.innerHTML,
								true,
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
							fetchBtnChangeTask(
								obj_target.attributes[0].textContent,
								obj_target.innerHTML,
								false,
							);
						}}
					>
						Не выполнено
					</button>

					<button
						onClick={() => {
							dispatch(actionModal(false));
							dispatch(actionInputError(false));
							fetchDeleteTask(obj_target.attributes[0].textContent);
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
