import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

import { I18nProvider } from "@/i18n/i18n-provider";
import type { Locale } from "@/lib/i18n";

type AppProvidersProps = {
	children: ReactNode;
	locale: Locale;
	messages: any;
};
export default function AppProviders({
	children,
	locale,
	messages,
}: AppProvidersProps) {
	return (
		<SessionProvider>
			<I18nProvider locale={locale} messages={messages}>
				{children}
			</I18nProvider>
		</SessionProvider>
	);
}
