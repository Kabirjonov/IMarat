import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
interface Props {
	children: ReactNode;
}
export default async function AppProviders({ children }: Props) {
	return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
