import { useState } from "react";
import styles from "./App.module.css";
import Select from "react-select";

const productOptions = [
	{ value: "tv", label: "телевизор" },
	{ value: "smartphone", label: "смартфон" },
	{ value: "laptop", label: "ноутбук" },
];
const colorOptions = [
	{ value: "black", label: "черный" },
	{ value: "white", label: "белый" },
	{ value: "silver", label: "серебристый" },
];

export const SelectedExamle = () => {
	return (
		<>
			<div className={styles.app}>
				<Select
					options={productOptions}
					defaultValue={productOptions[0]}
				></Select>
				<Select
					isMulti
					options={colorOptions}
					defaultValue={[colorOptions[0], colorOptions[1]]}
				></Select>
			</div>
		</>
	);
};

export default SelectedExamle;
