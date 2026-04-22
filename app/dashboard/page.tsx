import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Dashboard() {
	const session = await auth();
	if (!session) {
		redirect("/auth");
	}

	return (
		<div>
			<h2>Welcome, {session.user?.name}!</h2>
		</div>
	);
}
