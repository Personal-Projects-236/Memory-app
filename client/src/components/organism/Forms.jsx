import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

import { input, btn } from "../atom/index.jsx";
import { inputWithErrors } from "../molecule/index.jsx";

import styles from "../../styles/components/organism/Forms.module.css";

const Forms = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const array = ["title", "description", "tags"];

	const onSubmit = (data) => console.log("data", data);

	// TODO: create the button as an atom
	// NOTE: pass it the variant and the title

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{inputWithErrors(array, register, errors)}
			{input(register, "image", "file")}
			{btn("primary", "Save")}
		</form>
	);
};

export default Forms;
