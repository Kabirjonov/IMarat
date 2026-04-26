// components/SignOutButton.tsx
"use client";

import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function SignOutButton() {
	const { t } = useTranslation();

	return (
		<Button onClick={() => signOut({ redirectTo: "/auth" })} type='button'>
			{t("projects.signOut")}
		</Button>
	);
}
