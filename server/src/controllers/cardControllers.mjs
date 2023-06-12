import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cardControllers = async (res) => {
	await prisma.user.findMany({}).then((results) => {
		res.status(200).json({
			data: results,
			msg: "Data received successfully",
		});
	});
};

export default cardControllers;
