// components/SignOutButton.tsx
"use client";

import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
	return (
		<Button onClick={() => signOut({ redirectTo: "/auth" })} type='button'>
			Sign Out
		</Button>
	);
}
