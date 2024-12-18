import styles from "./app.module.css";
import data from "./data.json";
import { useState } from "react";

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	console.log(steps);
	console.log(activeIndex);

	// Можно задать 2 состояния — steps и activeIndex

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const onForwardClick = () => {
		setActiveIndex(activeIndex + 1);
	};
	const onBackClick = () => {
		setActiveIndex(activeIndex - 1);
	};

	const onfirstStep = activeIndex === 0;
	const onFinallyStep = activeIndex === steps.length - 1;
	console.log(onfirstStep, onFinallyStep);
	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{steps[activeIndex].content}
						{/* Для получения активного контента использйте steps и activeIndex
						Контент соответственный шагу. Сейчас активен шаг 3 */}
					</div>
					<ul className={styles["steps-list"]}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{/* {steps.map(({}, index) = > (
						<li
							className={styles["steps-item"] + " " + styles.done}
						>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
						{/* <button className={styles["steps-item-button"]}> */}

						{/* При клике на кнопку установка выбранного шага в качестве активного */}
						{/* Шаг 1 */}
						{/* </li> */}
						{/* ) )} */}
						{steps.map(({ id, title, content }, index) => (
							<li
								key={id}
								className={
									index > activeIndex
										? styles["steps-item"]
										: index === activeIndex
											? styles["steps-item"] +
												" " +
												styles.done +
												" " +
												styles.active
											: styles["steps-item"] +
												" " +
												styles.done
								}
							>
								<button className={styles["steps-item-button"]}>
									{index + 1}
								</button>
								Шаг {index + 1}
							</li>
						))}
						{/* <li
							className={styles["steps-item"] + " " + styles.done}
						>
							<button className={styles["steps-item-button"]}>
								2
							</button>
							Шаг 2
						</li>
						<li
							className={
								styles["steps-item"] +
								" " +
								styles.done +
								" " +
								styles.active
							}
						>
							<button className={styles["steps-item-button"]}>
								3
							</button>
							Шаг 3
						</li>
						<li className={styles["steps-item"]}>
							<button className={styles["steps-item-button"]}>
								4
							</button>
							Шаг 4
						</li> */}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							onClick={onBackClick}
							disabled={onfirstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={onForwardClick}
							disabled={onFinallyStep}
						>
							Далее
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
