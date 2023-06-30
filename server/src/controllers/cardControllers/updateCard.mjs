import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateCard = async (req, res) => {
	const { body, query } = req;
	const { id } = query;

	await prisma.user
		.update({
			where: { id: parseInt(id) },
			data: body,
		})
		.then(() => {
			res.status(200).json({ msg: "Data successfully updated" });
		})
		.catch((err) => {
			res.status(400).json({ msg: err.message });
		});
};

export default updateCard;
