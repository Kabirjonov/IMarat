"use server";

import { signIn } from "@/auth";

export async function loginAction(formData: FormData) {
	const email = formData.get("email");
	const password = formData.get("password");

	if (!email || !password) return;

	await signIn("credentials", {
		email: String(email),
		password: String(password),
		redirectTo: "/",
	});
}
