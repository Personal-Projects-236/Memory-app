import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const data = async (skip) => {
	return await prisma.user.findMany({
		skip: skip === undefined ? 0 : parseInt(skip),
		take: 10,
	});
};
