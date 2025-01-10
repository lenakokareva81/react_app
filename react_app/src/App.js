import styles from './app.module.css';
// import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const [showProcess, setShowProcess] = useState('');
	const [number, setNumber] = useState('');
	const [prevNumber, setPrevNumber] = useState('');
	const [operation, setOperation] = useState('');
	const [result, setResult] = useState(undefined);

	const addNumber = (figure) => {
		setNumber(number + String(figure));
	};
	const createOperation = (newOperation) => {
		if (result === undefined) {
			setPrevNumber(Number(number));
			setOperation(newOperation);
			setShowProcess(showProcess + number + newOperation);
			setNumber('');
		} else {
			setPrevNumber(result);
			setOperation(newOperation);
			setShowProcess(showProcess + newOperation);
			setResult(undefined);
			setNumber('');
		}
	};

	const calculate = () => {
		setShowProcess(showProcess + number);
		operation === '+'
			? setResult(prevNumber + Number(number))
			: setResult(prevNumber - Number(number));
	};

	const clear = () => {
		setShowProcess('');
		setNumber('');
		setPrevNumber('');
		setOperation('');
		setResult(undefined);
	};

	return (
		<div className={styles.container}>
			<div className={styles.input}>
				<span className={styles.inactive}>{showProcess}</span>
				{result === undefined ? number : '=' + result}
			</div>
			<div className={styles['container-button']}>
				<div className={styles['numbers-container']}>
					{NUMS.map(
						(number) => (
							<div
								className={styles['numbers-button']}
								onClick={() => addNumber(number)}
							>
								{number}
							</div>
						),

						// </div>
					)}
				</div>

				<div className={styles['operation-container']}>
					<div
						className={styles['operation-buttons']}
						onClick={() => createOperation('+')}
					>
						+
					</div>
					<div
						className={styles['operation-buttons']}
						onClick={() => createOperation('-')}
					>
						-
					</div>
					<div className={styles['operation-buttons']} onClick={calculate}>
						=
					</div>
					<div className={styles['operation-buttons']} onClick={clear}>
						c
					</div>
				</div>
			</div>
		</div>
	);
};

// <div class = "container">
// <div class ='input'><span class = "inactive">123 + </span>345</div>
// <div class="container-button">
// 	<div class ="numbers-container">
// 		<div class ="numbers-button">0</div>
// 		<div class ="numbers-button">1</div>
// 		<div class ="numbers-button">2</div>
// 		<div class ="numbers-button">3</div>
// 		<div class ="numbers-button">4</div>
// 		<div class ="numbers-button">5</div>
// 		<div class ="numbers-button">6</div>
// 		<div class ="numbers-button">7</div>
// 		<div class ="numbers-button">8</div>
// 		<div class ="numbers-button">9</div>
// 	</div>
// 	<div class ="operation-container">
// 		<div class ="operation-buttons">+</div>
// 		<div class ="operation-buttons">-</div>
// 		<div class ="operation-buttons">=</div>
// 		<div class ="operation-buttons">c</div>
// 	</div>
// </div>
