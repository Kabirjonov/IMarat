// import { PrismaClient } from "@prisma/client";
// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// const databaseUrl = process.env.DATABASE_URL;
// if (!databaseUrl) {
// 	throw new Error("DATABASE_URL is not defined in the environment variables.");
// }

// export const prisma = globalForPrisma.prisma || new PrismaClient({});

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
	globalForPrisma.prisma = prisma;
}
