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
		reset,
		formState: { errors },
	} = useForm();

	const array = ["title", "description", "tags"];

	const onSubmit = async (formData) => {
		const { data, status } = await onFormSubmit(formData);
		const { msg } = data;
		const slice = state.dataReducer.data.slice(0, 10);

		reset();
		dispatch({ type: "JSON_RESPONSE", msg, status });
		dispatch({ type: "SLICE_DATA", data: slice });
	};

	console.log("data", state.dataReducer.data);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{inputWithErrors(array, register, errors)}
			{input(register, "image", "file")}
			{btn("primary", "Save")}
		</form>
	);
};

export default Forms;
