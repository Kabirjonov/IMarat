import { PrismaClient } from "@/prisma/generated/main/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as {
	prisma: PrismaClient;
};

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL!, // pooler (6543)
});

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		adapter,
	});

if (process.env.NODE_ENV !== "production") {
	globalForPrisma.prisma = prisma;
}
