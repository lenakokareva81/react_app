//декларативный?
import styles from "./App.module.css";
import { useState } from "react";

export const App = () => {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	const isValueVaild = value.length >= 3;
	console.log(list);

	const onAddButtonClick = () => {
		if (isValueVaild) {
			const id = Date.now();
			const dateNow = new Date();
			const date = dateNow.toISOString();
			const updatedList = [...list, { id, value, date }];

			setList(updatedList);
			setValue("");
		}
	};

	const onInputButtonClick = () => {
		const promptValue = prompt("введите значение");
		if (promptValue.length < 3) {
			setValue(promptValue);
			setError("Введенное значение должно содержать минимум 3 символа");
		} else {
			setValue(promptValue);
			setError("");
		}
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles["page-heading"]}>Ввод значения</h1>
				<p className={styles["no-margin-text"]}>
					Текущее значение <code>value</code>: "
					<output className={styles["current-value"]}>{value}</output>
					"
				</p>

				{error !== "" ? (
					<div className={styles.error}>{error}</div>
				) : (
					""
				)}

				<div className={styles["buttons-container"]}>
					<button
						className={styles.button}
						onClick={onInputButtonClick}
					>
						Ввести новое
					</button>

					<button
						className={styles.button}
						disabled={!isValueVaild}
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles["list-container"]}>
					<h2 className={styles["list-heading"]}>Список:</h2>

					{list.length == 0 ? (
						<p className={styles["no-margin-text"]}>
							Нет добавленных элементов
						</p>
					) : (
						<ul className={styles.list}>
							{list.map(({ id, value, date }) => (
								<li className={styles["list-item"]} key={id}>
									{value} ----
									{date}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};

export default App;
