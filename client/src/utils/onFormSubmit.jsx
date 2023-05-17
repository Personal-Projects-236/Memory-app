import { getBase64 } from "././getBase64.jsx";

export const onFormSubmit = (data) => {
	const { title, description, tags, image } = data;

	let file = image[0];
	let base64 = "";

	getBase64(file)
		.then((result) => {
			file["base64"] = result;
			base64 = file.base64;
		})
		.then(() => {
			let sending = { title, description, tags, image: base64 };
			console.log("sending", sending);
		})
		.catch((err) => {
			console.log("err", err);
		});
};
