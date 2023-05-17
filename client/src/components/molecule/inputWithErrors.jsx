import { error, input } from "../atom/index.jsx";

export const inputWithErrors = (array, register, errors) =>
	array.map((item, index) => (
		<div key={index}>
			<>
				{input(register, item, "text")}
				{error(errors, item)}
			</>
		</div>
	));
