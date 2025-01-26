import styles from "./fieldForm.module.css";

export const FieldForm = ({ id, type, error, validateField, text }) => {
	return (
		<>
			<div className={`${styles.inputContainer} ${styles.ic1}`}>
				<input
					id={id}
					className={styles.input}
					type={type}
					placeholder=" "
					onBlur={validateField}
					onChange={validateField}
				/>
				<div className={styles.cut}></div>
				<label for="firstname" className={styles.placeholder}>
					{text}
				</label>
			</div>

			{error && <label className={styles.error}> {error}</label>}
		</>
	);
};
export default FieldForm;
