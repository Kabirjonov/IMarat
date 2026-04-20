import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/app/auth/auth";
interface Props {
	children: ReactNode;
}
export default async function AppProviders({ children }: Props) {
	const session = await auth();
	return (
		<SessionProvider session={session}>
			<NextIntlClientProvider>{children}</NextIntlClientProvider>
		</SessionProvider>
	);
}
