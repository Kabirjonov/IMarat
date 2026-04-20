import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { saltAndHashPassword, verifyPassword } from "@/utils/password";
import { signInSchema } from "@/schema/zod";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserFromDb } from "@/utils/user";
export const { handlers, signOut, signIn, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		Credentials({
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "Enter your email",
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "Enter your password",
				},
			},
			authorize: async credentials => {
				try {
					if (!credentials?.email || !credentials?.password) {
						throw new Error("Email and password are required.");
					}
					const { email, password } =
						await signInSchema.parseAsync(credentials);

					// logic to salt and hash password
					const pwHash = saltAndHashPassword(password);

					// logic to verify if the user exists
					const user = await getUserFromDb(email);

					if (!user || !user.password) {
						throw new Error("Invalid credentials.");
					}
					const isPasswordValid = await verifyPassword(password, user.password);

					if (!isPasswordValid) {
						throw new Error("Invalid credentials.");
					}

					// return JSON object with the user data
					return {
						id: user.id,
						email: user.email,
					};
				} catch (error) {
					if (error instanceof ZodError) {
						// Return `null` to indicate that the credentials are invalid
						return null;
					}
					return null;
				}
			},
		}),
	],
});
