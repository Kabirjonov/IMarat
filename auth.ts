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
				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: { email: credentials.email as string },
				});
				if (!user) {
					return null;
				}
				const isValid = user.password === credentials.password; // In production, use hashed passwords and a secure comparison method
				if (!isValid) {
					return null;
				}
				return { id: user.id, email: user.email };
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
				token.role = user.role;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.role = token.role;
			}
			return session;
		},
	},
});
