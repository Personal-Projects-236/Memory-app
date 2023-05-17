import { useForm } from "react-hook-form";

import { input, btn } from "../atom/index.jsx";
import { inputWithErrors } from "../molecule/index.jsx";

import { onFormSubmit } from "../../utils/onFormSubmit.jsx";

import styles from "../../styles/components/organism/Forms.module.css";

const Forms = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const array = ["title", "description", "tags"];

	return (
		<form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
			{inputWithErrors(array, register, errors)}
			{input(register, "image", "file")}
			{btn("primary", "Save")}
		</form>
	);
};

export default Forms;
