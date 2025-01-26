import styles from "./formEmailPAsswordYup.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const sendFormData = (formData) => {
	console.log(formData);
};

const fieldsSchema = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
			"неверный email",
		)
		.min(3, " Должно быть не меньше 3 символов")
		.max(20, "Должно быть не больше 20 символов"),

	password: yup
		.string()
		.matches(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
			"пароль должен содержать строчные и прописные буквы и цифры",
		)
		.min(3, " Должно быть не меньше 3 символов")
		.max(20, "Должно быть не больше 20 символов"),
	confirm_password: yup
		.string()

		.oneOf([yup.ref("password"), null], "пароли не совпадают"),
});

export const FormEmailPasswordYup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			confirm_password: "",
		},
		resolver: yupResolver(fieldsSchema),
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirm_passwordError = errors.confirm_password?.message;

	return (
		<div>
			<form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
				<div className={styles.title}>Добро пожаловать!</div>
				<div className={styles.subtitle}>создайте свой аккаунт</div>

				<div className={`${styles.inputContainer} ${styles.ic1}`}>
					<input
						id="email"
						className={styles.input}
						type="text"
						placeholder=" "
						{...register("email")}
					/>
					<div className={styles.cut}></div>
					<label for="firstname" className={styles.placeholder}>
						email
					</label>
				</div>

				{emailError && (
					<label className={styles.error}>{emailError}</label>
				)}

				<div className={`${styles.inputContainer} ${styles.ic1}`}>
					<input
						id="password"
						className={styles.input}
						placeholder=" "
						{...register("password")}
					/>
					<div className={styles.cut}></div>
					<label for="firstname" className={styles.placeholder}>
						{" "}
						password
					</label>
				</div>

				{passwordError && (
					<label className={styles.error}>{passwordError}</label>
				)}

				<div className={`${styles.inputContainer} ${styles.ic1}`}>
					<input
						id="confirm_password"
						className={styles.input}
						placeholder=" "
						{...register("confirm_password")}
					/>
					<div className={styles.cut}></div>
					<label for="firstname" className={styles.placeholder}>
						{" "}
						пароль
					</label>
				</div>

				{confirm_passwordError && (
					<label className={styles.error}>
						{confirm_passwordError}
					</label>
				)}

				<button
					type="submit"
					className={styles.submit}
					disabled={
						!!(emailError || passwordError || confirm_passwordError)
					}
				>
					Отправить
				</button>
			</form>
		</div>
	);
};
export default FormEmailPasswordYup;
