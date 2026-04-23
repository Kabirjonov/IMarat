import { auth } from "@/auth";
import Navbar from "@/components/shared/Navbar";
import { Role } from "@/types";
import { redirect, RedirectType } from "next/navigation";

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	if (session?.user?.role !== Role.ADMIN) {
		redirect("/", RedirectType.replace);
	}
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
