import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
interface Props {
	children: ReactNode;
}
import { SessionProvider } from "next-auth/react";
export default async function AppProviders({ children }: Props) {
	return (
		<SessionProvider>
			<NextIntlClientProvider>{children}</NextIntlClientProvider>
		</SessionProvider>
	);
}
