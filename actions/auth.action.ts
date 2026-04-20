import { signIn, signOut } from "@/app/auth/auth";

export async function signInWithCredentials(email: string, password: string) {
	try {
		const result = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});
		return result;
	} catch (error) {
		console.error("Error signing in:", error);
		return null;
	}
}
export async function signOutUser() {
	try {
		const result = await signOut({ redirect: false });
		return result;
	} catch (error) {
		console.error("Error signing out:", error);
		return null;
	}
}
