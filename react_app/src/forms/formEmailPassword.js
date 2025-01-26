import styles from "./formEmailPassword.module.css";
import { useState, useRef } from "react";
import { FieldForm } from "../components/fieldForm/fieldForm";

const sendFormData = (formData) => {
	console.log(formData);
};

export const FormEmailPassword = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		repeatPassword: "",
	});

	const [errorData, setErrorData] = useState({
		emailError: null,
		passwordError: null,
		repeatPasswordError: null,
	});

	const submitButtonRef = useRef(null);

	if (
		formData.email !== "" &&
		formData.password !== "" &&
		formData.repeatPassword !== "" &&
		errorData.emailError == null &&
		errorData.passwordError == null &&
		errorData.repeatPasswordError == null
	) {
		submitButtonRef.current.focus();
	}

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(formData);
	};

	const validateField = ({ target }) => {
		const field = target.id;
		const fieldError = field + "Error";

		setFormData({ ...formData, [field]: target.value });

		let error = null;

		switch (field) {
			case "email":
				if (
					!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
						target.value,
					)
				) {
					error = "email введен неверно";
				}
				break;
			case "password":
				if (
					target.value.length < 3 ||
					target.value.length > 20 ||
					!/(?=.*[0-9])/.test(target.value)
				) {
					error =
						"пароль должен быть от 3 до 20 символов, должен содержать хотя бы 1 число";
				}

				break;
			case "repeatPassword":
				if (target.value !== formData.password) {
					error = "пароли не совпадают";
				}
				break;
			default:
		}

		setErrorData({ ...errorData, [fieldError]: error });

		console.log(formData.email !== "" && errorData.emailError == null);
	};

	return (
		<>
			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.title}>Добро пожаловать!</div>
				<div className={styles.subtitle}>создайте свой аккаунт</div>
				<FieldForm
					id="email"
					type="text"
					error={errorData.emailError}
					validateField={validateField}
					text="email"
				></FieldForm>
				<FieldForm
					id="password"
					type="password"
					error={errorData.passwordError}
					validateField={validateField}
					text="пароль"
				></FieldForm>
				<FieldForm
					id="repeatPassword"
					type="password"
					error={errorData.repeatPasswordError}
					validateField={validateField}
					text="пароль"
				></FieldForm>

				<button
					type="text"
					className={styles.submit}
					ref={submitButtonRef}
					disabled={
						!!(
							errorData.emailError ||
							errorData.passwordError ||
							errorData.repeatpasswordError
						)
					}
				>
					зарегестрироваться
				</button>
			</form>
		</>
	);
};

export default FormEmailPassword;
