import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";
export const { handlers, signIn, signOut, auth } = NextAuth({
	secret: process.env.AUTH_SECRET,
	providers: [
		Credentials({
			credentials: {
				email: {
					label: "Email",
					type: "email",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				console.log("CREDENTIALS:", credentials);
				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: { email: credentials.email as string },
				});
				console.log("USER:", user);
				console.log("DB PASSWORD:", user?.password);
				console.log("INPUT PASSWORD:", credentials?.password);
				if (!user) {
					return null;
				}
				const isValid = user.password === credentials.password; // In production, use hashed passwords and a secure comparison method
				if (!isValid) {
					return null;
				}
				console.log("IS VALID:", isValid);
				return { id: user.id, email: user.email, role: user.role };
			},
		}),
	],
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt", // 🔥 MUHIM
	},

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				// @ts-ignore
				token.role = user.role;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				// @ts-ignore

				session.user.role = token.role;
			}
			return session;
		},
	},
});
