import { auth } from "@/auth";
import Navbar from "@/components/shared/Navbar";
import { Role } from "@/types";
import { redirect, RedirectType } from "next/navigation";

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	if (session?.user.role === Role.ADMIN) {
		redirect("/admin", RedirectType.replace);
	}
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
