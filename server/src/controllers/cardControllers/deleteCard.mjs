import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteCard = async (req, res) => {
	const { query } = req;
	const { id } = query;

	await prisma.user
		.delete({
			where: { id: parseInt(id) },
		})
		.then(() => {
			res.status(200).json({ msg: "Your Card has been successfully deleted" });
		})
		.catch((err) => {
			res.status(400).json({ msg: err.message });
		});
};

export default deleteCard;
