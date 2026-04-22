import { auth } from "@/auth";
import Navbar from "@/components/shared/Navbar";
import { redirect, RedirectType } from "next/navigation";

const metadata = {
	title: "Login - Imarat development",
	description: "Login to your account on Imarat development",
};

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	// if (session) {
	// 	redirect("/dashboard", RedirectType.replace);
	// }
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
