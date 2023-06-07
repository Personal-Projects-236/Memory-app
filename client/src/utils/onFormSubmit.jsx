import axios from "axios";

import { getBase64 } from "./getBase64.jsx";

export const onFormSubmit = async (formData) => {
	const { title, description, tags, image } = formData;

	let file = image[0];
	let base64 = "";

	return await getBase64(file)
		.then((result) => {
			file["base64"] = result;
			base64 = file.base64;
		})
		.then(async () => {
			let sending = { title, description, tags, image: base64 };
			return await axios
				.post("/forms", sending)
				.then((items) => {
					return items;
				})
				.catch((err) => console.log("err", err));
		})
		.catch((err) => {
			console.log("err", err);
		});
};
