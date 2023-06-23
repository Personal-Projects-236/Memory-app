import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const len = async () => {
	return await prisma.user.count()
};
