import { useForm } from "react-hook-form";

import { input, btn } from "../atom/index.jsx";
import { inputWithErrors } from "../molecule/index.jsx";

import { onFormSubmit } from "../../utils/onFormSubmit.jsx";
import useAppContext from "../../hooks/useAppContext.jsx";

import styles from "../../styles/components/organism/Forms.module.css";

const Forms = () => {
	const { state, dispatch } = useAppContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const array = ["title", "description", "tags"];

	const onSubmit = async (formData) => {
		const { data, status } = await onFormSubmit(formData);
		const { msg } = data;

		dispatch({ type: "JSON_RESPONSE", msg, status });
	};

	console.log("state", state);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{inputWithErrors(array, register, errors)}
			{input(register, "image", "file")}
			{btn("primary", "Save")}
		</form>
	);
};

export default Forms;
