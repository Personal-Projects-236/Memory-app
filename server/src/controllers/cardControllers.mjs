import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cardControllers = async (req, res) => {
	const { query } = req;
	const { skip } = query;

	await prisma.user
		.findMany({ skip: skip === undefined ? 0 : parseInt(skip), take: 10 })
		.then((results) => {
			res.status(200).json({
				data: results,
				msg: "Data received successfully",
			});
		});
};

export default cardControllers;
