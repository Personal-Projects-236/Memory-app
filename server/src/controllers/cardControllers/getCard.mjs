import { len, data } from "../../services/Card/index.mjs";

const cardControllers = async (req, res) => {
	const { query } = req;
	const { checkLength, skip } = query;

	checkLength === "true"
		? res.status(200).json({ len: await len(), data: await data(skip) })
		: res.status(200).json({ data: await data(skip) });
};

export default cardControllers;
